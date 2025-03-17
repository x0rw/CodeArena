use std::env;

use crate::{
    models::{
        problem_query::{ProblemByTagQuery, ProblemsQuery},
        solution_query::SolutionByProblemId,
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
