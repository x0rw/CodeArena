use serde::{Deserialize, Deserializer};

#[derive(Deserialize, Debug)]
pub struct SolutionByProblemId {
    pub limit: Option<u32>,
    pub problem_id: Option<String>,
}
