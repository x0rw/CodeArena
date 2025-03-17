use actix_web::web;

pub mod problem_routes;

use crate::handlers::{
    problem_handler::{self, add_problem, get_problem, get_problems, get_problems_by_tag},
    solution_handler::get_solution,
};
