use std::error;

use crate::models::{problem::Problem, solution::Solution, user::User};

pub trait Database {
    async fn get_problems(&self, limit: u32) -> Vec<Problem>;
    async fn get_problems_by_tag(&self, problem_tag: String, limit: u32) -> Vec<Problem>;
    async fn get_problem(&self, problem_id: u32) -> Problem;
    async fn add_problem(
        &self,
        problem_title: String,
        problem_body: String,
        difficulty: String,
        tags: String,
    );
    async fn add_solution(&self, id_user: u32, id_problem: u32, body: String, language: String);
    async fn get_solution(&self, id_problem: u32, id_user: u32) -> Solution;
    async fn get_solutions_by_problem(&self, id_problem: u32, limit: u32) -> Vec<Solution>;
    async fn get_solution_by_id(&self, id_solution: u32) -> Solution;
    async fn get_user(&self, user_id: u32) -> Vec<User>;
    async fn get_users();
}
