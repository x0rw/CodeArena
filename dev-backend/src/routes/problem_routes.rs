use actix_web::web;

use crate::handlers::problem_handler::{self, get_problem, get_problems};
pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/problem/{problem_id}", web::get().to(get_problem))
            .route("/problems/{limit}", web::get().to(get_problems)),
    );
}
