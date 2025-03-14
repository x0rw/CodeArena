use std::error;

use crate::models::problem::Problem;

pub trait Database {
    async fn get_problems(&self, limit: u32) -> Vec<Problem>;
    async fn get_problem(&self, problem_id: u32) -> Problem;
    async fn add_problem(
        &self,
        problem_title: String,
        problem_body: String,
        difficulty: String,
        tags: String,
    );
    async fn add_solution();
    async fn get_solution();
    async fn get_solutions();
    async fn get_user();
    async fn get_users();
}
