use serde::Deserialize;
use std::sync::Mutex;
mod handlers;
mod models;
mod routes;

use actix_web::{App, HttpServer};
use dotenv::dotenv;
use routes::problem_routes::init;
use std::env;
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    let host = env::var("HOST").unwrap();
    let port = env::var("PORT").unwrap();

    println!("api running at {host}:{port}");
    HttpServer::new(|| App::new().configure(init))
        .bind(format!("{host}:{port}"))?
        .run()
        .await
}
