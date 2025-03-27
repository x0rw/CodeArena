import React, { useEffect, useState } from 'react';
import ProblemCard from '../components/problemCard.tsx';
import Login from '../pages/login.tsx';

import Link from 'next/link';

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
interface Problem {
  problem_id: number;
  title: string;
  description: string;
  difficulty: string;
}

interface ProblemsListProps {
  problems: Problem[];
}



const ProblemsList = ({ problems }: ProblemsListProps) => {
  return (
    // bullshit tailwind
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Problems</h2>
      <ul className="divide-y divide-gray-300">
        {problems.map((problem, index) => (

            <li key={index} className="py-4 items-center justify-between">
 <Link 
              href={`/problem/${problem.problem_id}`}
              className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors"
            >
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
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemsList;
