use serde::{Deserialize, Serialize};
use uuid::uuid;

#[derive(Debug, Deserialize, Serialize)]
/*
    idSolution	int AI PK
    idUser	varchar(45)
    idProblem	varchar(45)
    body	varchar(45)
    submitted_at	date
    language	varchar(45)
    status	varchar(45)
    execution_time	varchar(45)
    memory_usage	varchar(45)
    Problem_idProblem	int PK
    User_idUser	int PK
*/

pub struct Solution {
    pub solution_id: Option<i32>,
    pub user_id: String,
    pub problem_id: String,
    pub body: String,
    pub submitted_at: String,
    pub language: String,
    pub status: String,
    pub execution_time: Option<String>,
    pub memory_usage: Option<String>,
}
