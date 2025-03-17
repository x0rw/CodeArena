use actix_web::web;

use crate::handlers::problem_handler::{
    self, add_problem, get_problem, get_problems, get_problems_by_tag,
};
use crate::models::problem_query::ProblemByTagQuery;
pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/problem/{problem_id}", web::get().to(get_problem))
            .route("/problems", web::get().to(get_problems))
            .route("/problems/by-tag", web::get().to(get_problems_by_tag))
            .route("/problem", web::post().to(add_problem)),
    );
}
