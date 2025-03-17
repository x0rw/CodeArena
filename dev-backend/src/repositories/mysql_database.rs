use std::{io, sync::Arc};

use crate::{
    database::Database, models::problem::Problem, models::solution::Solution, models::user::User,
};
use sqlx::{mysql::MySqlPool, query, Error, Result};
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
    async fn get_problems(&self, limit: u32) -> Vec<Problem> {
        println!("get_problems({limit})");
        let q = sqlx::query!(" SELECT * FROM Problem LIMIT ? ", limit)
            .map(|x| Problem {
                problem_id: Some(x.idProblem),
                body: x.body.unwrap(),
                tags: x.tags.unwrap(),
                difficulty: x.difficulty.unwrap(),
                title: x.title.unwrap(),
            })
            .fetch_all(&self.pool)
            .await
            .unwrap();
        return q;
    }

    async fn get_problems_by_tag(&self, problem_tag: String, limit: u32) -> Vec<Problem> {
        println!("get_problems_by_tag({problem_tag},{limit}");
        let q = sqlx::query!(" SELECT * FROM Problem where tags=?", problem_tag)
            .map(|x| Problem {
                problem_id: Some(x.idProblem),
                body: x.body.unwrap(),
                tags: x.tags.unwrap(),
                difficulty: x.difficulty.unwrap(),
                title: x.title.unwrap(),
            })
            .fetch_all(&self.pool)
            .await
            .unwrap();
        return q;
    }

    async fn get_problem(&self, problem_id: u32) -> Problem {
        let q = sqlx::query!(" SELECT * FROM Problem where idProblem=?", problem_id)
            .map(|x| Problem {
                problem_id: Some(x.idProblem),
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

    async fn add_problem(
        &self,
        problem_title: String,
        problem_body: String,
        difficulty: String,
        tags: String,
    ) {
        sqlx::query!(
            "insert into Problem(title,body,tags,difficulty) values(?,?,?,?)",
            problem_title,
            problem_body,
            tags,
            difficulty
        )
        .execute(&self.pool)
        .await
        .unwrap();
        println!("Inserted Problem:{:?}", problem_title);
    }

    async fn add_solution(&self, id_user: u32, id_problem: u32, body: String, language: String) {
        let res = query!(
            "
            insert into Solution(body,language,status,Problem_idProblem,User_idUser) 
            Values(?,?, 'processing',?, ?)",
            body,
            language,
            id_problem,
            id_user
        );
    }

    async fn get_solution(&self, id_problem: u32, id_user: u32) -> Solution {
        let q = sqlx::query!(
            " SELECT * FROM Solution where Problem_idProblem=? and User_idUser=?",
            id_problem,
            id_user
        )
        .map(|x| Solution {
            solution_id: Some(x.idSolution),
            body: x.body.unwrap_or_default(),
            submitted_at: x.submitted_at.unwrap().to_string(),
            language: x.language.unwrap_or_default(),
            status: x.status.unwrap_or_default(),
            execution_time: x.execution_time,
            memory_usage: x.memory_usage,
            problem_id: x.Problem_idProblem.to_string(),
            user_id: x.User_idUser.to_string(),
        })
        .fetch_one(&self.pool)
        .await
        .unwrap();
        return q;
    }

    async fn get_solution_by_id(&self, id_solution: u32) -> Solution {
        let q = sqlx::query!(" SELECT * FROM Solution where idSolution=?", id_solution)
            .map(|x| Solution {
                solution_id: Some(x.idSolution),
                body: x.body.unwrap_or_default(),
                submitted_at: x.submitted_at.unwrap().to_string(),
                language: x.language.unwrap_or_default(),
                status: x.status.unwrap_or_default(),
                execution_time: x.execution_time,
                memory_usage: x.memory_usage,
                problem_id: x.Problem_idProblem.to_string(),
                user_id: x.User_idUser.to_string(),
            })
            .fetch_one(&self.pool)
            .await
            .unwrap();
        return q;
    }

    async fn get_solutions_by_problem(&self, id_problem: u32, limit: u32) -> Vec<Solution> {
        let q = sqlx::query!(
            " SELECT * FROM Solution where Problem_idProblem=? ",
            id_problem,
        )
        .map(|x| Solution {
            solution_id: Some(x.idSolution),
            body: x.body.unwrap_or_default(),
            submitted_at: x.submitted_at.unwrap().to_string(),
            language: x.language.unwrap_or_default(),
            status: x.status.unwrap_or_default(),
            execution_time: x.execution_time,
            memory_usage: x.memory_usage,
            problem_id: x.Problem_idProblem.to_string(),
            user_id: x.User_idUser.to_string(),
        })
        .fetch_all(&self.pool)
        .await
        .unwrap();
        return q;
    }
    async fn get_user(&self, id_user: u32) -> Vec<User> {
        let q = sqlx::query!(" SELECT * FROM User where idUser=? ", id_user)
            .map(|x| User {
                username: x.username,
                password: None,
                id_user: Some(id_user as i32),
                birth_date: x.birth_date.unwrap().to_string(),
                email: x.email,
                country: x.country.unwrap_or_default(),
            })
            .fetch_all(&self.pool)
            .await
            .unwrap();
        return q;
    }
    async fn get_users() {
        todo!()
    }
}
