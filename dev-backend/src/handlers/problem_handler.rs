use std::env;

use crate::models::problem::{self, Problem};
use actix_web::{web, HttpResponse};

use sqlx::{mysql::MySqlPool, Execute};

pub async fn get_problem(problem_id: web::Path<u32>) -> HttpResponse {
    let pool = MySqlPool::connect(&env::var("DATABASE_URL").unwrap())
        .await
        .unwrap();

    let qu = sqlx::query!(
        r#"
SELECT * FROM Problem where idProblem = ?
        "#,
        problem_id.into_inner()
    )
    .map(|x| Problem {
        problem_id: x.idProblem,
        body: x.body.unwrap(),
        tags: x.tags.unwrap(),
        difficulty: x.difficulty.unwrap(),
        title: x.title.unwrap(),
    })
    .fetch_one(&pool)
    .await
    .unwrap();
    let mock_problem = problem::Problem {
        problem_id: 34,
        title: "hello world problem".to_string(),
        body: "mock body".to_string(),
        difficulty: "5 stars".to_string(),
        tags: "tag1,tag2".to_string(),
    };
    HttpResponse::Ok().json(qu)
}
