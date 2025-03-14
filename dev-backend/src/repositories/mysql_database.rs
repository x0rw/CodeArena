use std::sync::Arc;

use crate::{database::Database, models::problem::Problem};
use sqlx::{mysql::MySqlPool, Error, Result};
pub struct MySqlDatabase {
    pub pool: MySqlPool,
}
impl Clone for MySqlDatabase {
    fn clone(&self) -> Self {
        MySqlDatabase {
            pool: self.pool.clone(),
        }
    }
}
impl MySqlDatabase {
    pub fn new(pool: MySqlPool) -> Self {
        MySqlDatabase { pool: pool }
    }
}
impl Database for MySqlDatabase {
    async fn get_problems(&self, limit: u32) -> Problem {
        let q = sqlx::query!(" SELECT * FROM Problem where idProblem = 1")
            .map(|x| Problem {
                problem_id: x.idProblem,
                body: x.body.unwrap(),
                tags: x.tags.unwrap(),
                difficulty: x.difficulty.unwrap(),
                title: x.title.unwrap(),
            })
            .fetch_one(&self.pool)
            .await
            .unwrap();
        return q;
    }

    async fn get_problem(&self, problem_id: u32) {
        todo!()
    }

    async fn add_problem(&self, problem_title: String, problem_body: String, difficulty: String) {
        todo!()
    }
    async fn add_solution() {
        todo!()
    }
    async fn get_solution() {
        todo!()
    }
    async fn get_solutions() {
        todo!()
    }
    async fn get_user() {
        todo!()
    }
    async fn get_users() {
        todo!()
    }
}
