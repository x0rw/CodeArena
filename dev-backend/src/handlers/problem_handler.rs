use std::env;

use crate::{
    models::problem::{self, Problem},
    repositories::{database::Database, mysql_database::MySqlDatabase},
};
use actix_web::{web, HttpResponse};

use sqlx::{mysql::MySqlPool, Execute};

pub async fn get_problem(db: web::Data<MySqlDatabase>, problem_id: web::Path<u32>) -> HttpResponse {
    let pr = db.get_problem(problem_id.into_inner()).await;
    HttpResponse::Ok().json(pr)
}

pub async fn get_problems(db: web::Data<MySqlDatabase>, limit: web::Path<u32>) -> HttpResponse {
    let pr = db.get_problems(limit.into_inner()).await;
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
