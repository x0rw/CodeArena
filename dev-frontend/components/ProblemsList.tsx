import React, { useEffect, useState } from 'react';
import ProblemCard from '../components/problemCard.tsx';
import "bootstrap/dist/css/bootstrap.min.css";

interface Problem {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const difficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "text-success fw-bold"; // Green text for easy
    case "Medium":
      return "text-warning fw-bold"; // Yellow text for medium
    case "Hard":
      return "text-danger fw-bold"; // Red text for hard
    default:
      return "text-secondary";
  }
};

const ProblemsPage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    setProblems([
      {
        title: "Two Sum",
        description:
          "Find two numbers in an array that add up to a target value.",
        difficulty: "Easy",
      },
      {
        title: "Reverse Linked List",
        description:
          "Given the head of a singly linked list, reverse it in place.",
        difficulty: "Medium",
      },
      {
        title: "Merge K Sorted Lists",
        description:
          "Merge k sorted linked lists into one sorted list efficiently.",
        difficulty: "Hard",
      },
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Problems List</h2>
      <ul className="list-group list-group-flush">
        {problems.map((problem, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">{problem.title}</h5>
              <p className="text-muted small mb-0">{problem.description}</p>
            </div>
            <span className={difficultyClass(problem.difficulty)}>
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemsPage;
