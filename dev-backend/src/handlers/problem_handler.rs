use std::env;

use crate::{
    models::{
        problem::{self, Problem},
        problem_query::{ProblemByTagQuery, ProblemsQuery},
    },
    repositories::{database::Database, mysql_database::MySqlDatabase},
};
use actix_web::{web, HttpResponse};

use sqlx::{mysql::MySqlPool, Execute};

pub async fn get_problem(db: web::Data<MySqlDatabase>, problem_id: web::Path<u32>) -> HttpResponse {
    let pr = db.get_problem(problem_id.into_inner()).await;
    HttpResponse::Ok().json(pr)
}

pub async fn get_problems(
    db: web::Data<MySqlDatabase>,
    limitq: web::Query<ProblemsQuery>,
) -> HttpResponse {
    let limit = limitq.limit.unwrap_or(10);
    let pr = db.get_problems(limit).await;
    HttpResponse::Ok().json(pr)
}

pub async fn get_problems_by_tag(
    db: web::Data<MySqlDatabase>,
    q: web::Query<ProblemByTagQuery>,
) -> HttpResponse {
    let tag = q.tags.clone().unwrap_or("Default".to_string());
    let limit = q.limit.unwrap_or(10);
    let pr = db.get_problems_by_tag(tag, limit).await;
    HttpResponse::Ok().json(pr)
}

pub async fn add_problem(db: web::Data<MySqlDatabase>, form: web::Query<Problem>) -> HttpResponse {
    let title = form.title.clone();
    let body = form.body.clone();
    let tags = form.tags.clone();
    let difficulty = form.difficulty.clone();
    let pr = db.add_problem(title, body, difficulty, tags).await;
    HttpResponse::Ok().json(pr)
}
