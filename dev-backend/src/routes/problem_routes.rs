use actix_web::web;

use crate::handlers::problem_handler::{
    self, add_problem, get_problem, get_problems, get_problems_by_tag,
};
use crate::handlers::solution_handler::{add_solution, get_solution, get_solutions_by_problem};
use crate::models::problem_query::ProblemByTagQuery;
pub fn problem_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/problem/{problem_id}", web::get().to(get_problem))
            .route("/problems", web::get().to(get_problems))
            .route("/problems/by-tag", web::get().to(get_problems_by_tag))
            .route("/problem", web::post().to(add_problem))
            .route("/solution/{solution_id}", web::get().to(get_solution))
            .route("/solution", web::get().to(add_solution))
            .route("/solutions", web::get().to(get_solutions_by_problem)),
    );
}
