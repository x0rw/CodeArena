use std::env;

use crate::{
    models::{
        problem,
        problem_query::{ProblemByTagQuery, ProblemsQuery},
        solution::Solution,
        solution_query::{AddSolution, SolutionByProblemId},
    },
    repositories::{database::Database, mysql_database::MySqlDatabase},
};
use actix_web::{web, HttpResponse};

use sqlx::{mysql::MySqlPool, Execute};

pub async fn get_solutions_by_problem(
    db: web::Data<MySqlDatabase>,
    query: web::Query<SolutionByProblemId>,
) -> HttpResponse {
    println!("get_solutions_by_problem");
    let problem_id = query.problem_id.clone().unwrap().parse::<u32>().unwrap();
    let limit = query.limit.unwrap_or(10);
    let res = db.get_solutions_by_problem(problem_id, limit).await;
    HttpResponse::Ok().json(res)
}
pub async fn get_solution(
    db: web::Data<MySqlDatabase>,
    solution_id: web::Path<u32>,
) -> HttpResponse {
    let id = solution_id.into_inner();
    println!("id: {id}");
    let res = db.get_solution_by_id(id).await;
    HttpResponse::Ok().json(res)
}

pub async fn add_solution(
    db: web::Data<MySqlDatabase>,
    form: web::Query<AddSolution>,
) -> HttpResponse {
    let language = form.language.clone();
    let problem_id = form.problem_id.clone();
    let user_id = form.user_id.clone();
    let body = form.body.clone();
    println!("lang:{language}, problem_id: {problem_id}, user_id: {user_id}, body: {body}");
    let pr = db.add_solution(user_id, problem_id, body, language).await;
    HttpResponse::Ok().json(pr)
}
