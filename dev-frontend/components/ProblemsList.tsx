import React, { useEffect, useState } from 'react';
import ProblemCard from '../components/problemCard.tsx';
import Login from '../pages/login.tsx';

interface Problem {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const difficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return 'bg-green-100 text-green-800';
    case "Medium":
      return 'bg-yellow-100 text-yellow-800';
    case "Hard":
      return 'bg-red-100 text-red-800';
    default:
      return "text-warning fw-bold";
  }
};

const problems = [
  {
    title: "Two Sum", description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.", difficulty: "Easy"
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "Medium"
  },
  {
    title: "Median of Two Sorted Arrays",
    description: "Given two sorted arrays, find the median of the two sorted arrays.",
    difficulty: "Hard"
  }
];

const ProblemsList = () => {
  return (
    // bullshit tailwind
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Problems</h2>
      <ul className="divide-y divide-gray-300">
        {problems.map((problem, index) => (
          <li key={index} className="py-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{problem.title}</h3>
              <p className="text-sm text-gray-600">{problem.description}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                difficultyClass(problem.difficulty)
              }`}
            >
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemsList;
