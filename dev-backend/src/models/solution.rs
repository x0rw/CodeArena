use serde::{Deserialize, Serialize};
use uuid::uuid;

#[derive(Debug, Deserialize, Serialize)]
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
