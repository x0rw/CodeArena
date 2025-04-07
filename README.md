# CodeArena
A fast, scalable platform for solving coding challenges with multi-language support and secure Docker-based execution(possible migration to Firecracker VM??), built in Rust, NodeJs

## Tasks:
- Basic configurations(db, docker, build scripts, ...)
- Rust, NodeJs dependencies
- Github Actions for Rust and Nodejs backends 
- RabbitMq, Redis integrations
- 
## Rust supported endpoints:
- POST /problem 
- GET /problem (get problem by id)
- GET /problems (by limit)
## Routes usage example:
- POST http://127.0.0.1:8080/api/problem?title=new problem 3&body=this is the body of the problem&tags=prob&difficulty=very not hard
- GET http://127.0.0.1:8080/api/problem/2
- GET http://127.0.0.1:8080/api/problems
- GET http://127.0.0.1:8080/api/problems?limit=2
- GET http://127.0.0.1:8080/api/problems/by-tag?tags=greedy,algo
- GET http://127.0.0.1:8080/api/problems/by-tag?tags=greedy,algo&limit=4
## NodeJs Supported endpoints:
- 
- 
## ER Model
![ER Diagram](docs/ERR_modele.png)

```mermaid
flowchart TD
    A([Start]) --> B{Is User Logged In?}
    B -->|No| C[Show Login/Register Options]
    C --> D[Register]
    C --> E[Login]
    D --> F[Fill Registration Form]
    E --> G[Enter Credentials]
    F --> H[Validate & Create Account]
    G --> I[Validate Credentials]
    H --> J[Log In User]
    I --> J
    J --> K[Redirect to Dashboard]
    B -->|Yes| K
    K --> L[Browse Problems]
    L --> M[Select Problem]
    M --> N[View Problem Description]
    N --> O{Want to Submit Solution?}
    O -->|No| L
    O -->|Yes| P[Write/Upload Code]
    P --> Q[Submit Solution]
    Q --> R[Code Execution Engine]
    R --> S{Is Code Correct?}
    S -->|Yes| T[Display Success: Accepted]
    S -->|No| U[Display Error: Wrong Answer/TLE]
    T --> L
    U --> P
```
