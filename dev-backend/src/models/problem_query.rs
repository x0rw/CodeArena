use serde::{Deserialize, Deserializer};
#[derive(Deserialize, Debug)]
pub struct ProblemByTagQuery {
    pub limit: Option<u32>,
    pub tags: Option<String>,
}

#[derive(Deserialize, Debug)]
pub struct ProblemsQuery {
    pub limit: Option<u32>,
}
