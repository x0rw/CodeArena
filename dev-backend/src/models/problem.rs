use serde::{Deserialize, Serialize};
use uuid::uuid;

#[derive(Debug, Deserialize, Serialize)]
pub struct Problem {
    pub problem_id: Option<i32>,
    pub title: String,
    pub body: String,
    pub difficulty: String,
    pub tags: String,
}
