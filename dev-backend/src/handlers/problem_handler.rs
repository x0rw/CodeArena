use actix_web::{web, HttpResponse};

use crate::models::problem;

pub async fn get_problem(problem_id: web::Path<u32>) -> HttpResponse {
    let mock_problem = problem::Problem {
        problem_id: 34,
        title: "hello world problem".to_string(),
        body: "mock body".to_string(),
        rating: "5 stars".to_string(),
        tags: "tag1,tag2".to_string(),
    };
    HttpResponse::Ok().json(mock_problem)
}
