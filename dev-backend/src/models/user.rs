use serde::{Deserialize, Serialize};
use uuid::uuid;

#[derive(Debug, Deserialize, Serialize)]
/*
   idUser	int AI PK
   username	varchar(45)
   password	varchar(45)
   email	varchar(45)
   birth_date	date
   country	varchar(45)
*/
pub struct User {
    pub id_user: Option<i32>,
    pub username: String,
    pub password: Option<String>,
    pub email: String,
    pub birth_date: String,
    pub country: String,
}
