use serde::{Deserialize, Serialize};
use uuid::uuid;

#[derive(Debug, Deserialize, Serialize)]
pub struct Problem {
    pub problem_id: u32,
    pub title: String,
    pub body: String,
    pub rating: String,
    pub tags: String,
}
