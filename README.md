a# CodeArena
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
- POST http://127.0.0.1:8080/api/problem
- GET http://127.0.0.1:8080/api/problem/:id
- GET http://127.0.0.1:8080/api/problems
- GET http://127.0.0.1:8080/api/problems/by-tag

## NodeJs Supported endpoints:
- 
- 
## ER Model
![ER Diagram](docs/ERR_modele.png)

## Activity Diagram:
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
## Sequence Diagram:
```mermaid
sequenceDiagram
    actor User
    participant Frontend as Frontend
    participant APIGateway as API Gateway
    participant AuthService
    participant ProblemService
    participant SubmissionService
    participant ExecutionEngine

    User->>Frontend: Opens website
    Frontend->>Frontend: Renders static content
    alt Not Logged In
        User->>Frontend: Clicks "Login/Register"
        Frontend->>AuthService: POST /auth/login (via API Gateway)
        AuthService->>AuthService: Validates credentials
        AuthService-->>Frontend: Returns JWT
        Frontend->>Frontend: Stores JWT, redirects to dashboard
    else Logged In (JWT exists)
        Frontend->>APIGateway: GET /problems (with JWT)
        APIGateway->>ProblemService: Forward request
        ProblemService-->>APIGateway: Returns problem list
        APIGateway-->>Frontend: Returns problem list
        User->>Frontend: Selects problem
        Frontend->>APIGateway: GET /problem/:id (with JWT)
        APIGateway->>ProblemService: Forward request
        ProblemService-->>APIGateway: Returns problem details
        APIGateway-->>Frontend: Returns problem details
    end

    User->>Frontend: Submits code
    Frontend->>APIGateway: POST /submissions (Code + Problem ID + JWT)
    APIGateway->>SubmissionService: Forward request
    SubmissionService->>ExecutionEngine: Execute code with test cases
    ExecutionEngine->>SubmissionService: Returns result (AC/TLE/WA)
    SubmissionService->>ProblemService: Updates leaderboard (if AC)
    SubmissionService-->>APIGateway: Returns submission result
    APIGateway-->>Frontend: Returns result
    Frontend->>User: Displays verdict
```
