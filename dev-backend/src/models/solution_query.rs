use serde::{Deserialize, Deserializer};

#[derive(Deserialize, Debug)]
pub struct SolutionByProblemId {
    pub limit: Option<u32>,
    pub problem_id: Option<String>,
}

//async fn add_solution(&self, id_user: u32, id_problem: u32, body: String, language: String) {
#[derive(Debug, Deserialize)]
pub struct AddSolution {
    pub user_id: u32,
    pub problem_id: u32,
    pub language: String,
    pub body: String,
}
