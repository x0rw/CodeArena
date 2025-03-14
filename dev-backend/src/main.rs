use serde::Deserialize;
use sqlx::MySqlPool;
use std::sync::Mutex;
mod config;
mod handlers;
mod models;
mod repositories;
mod routes;

use actix_web::{web::Data, App, HttpServer};
use config::db;
use dotenv::dotenv;
use repositories::{database, mysql_database::MySqlDatabase};
use routes::problem_routes::init;
use std::env;
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    let host = env::var("HOST").unwrap();
    let port = env::var("PORT").unwrap();

    let db_pool = MySqlDatabase::new(
        MySqlPool::connect(&env::var("DATABASE_URL").unwrap())
            .await
            .unwrap(),
    );

    println!("api running at {host}:{port}");
    HttpServer::new(move || {
        App::new()
            .configure(init)
            .app_data(Data::new(db_pool.clone()))
    })
    .bind(format!("{host}:{port}"))?
    .run()
    .await
}
