use actix_web::web;

use crate::handlers::problem_handler::{self, get_problem};
pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("/api").route("/problem", web::post().to(get_problem)));
}
