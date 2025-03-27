import Link from 'next/link';
import Navbar from '../components/navbar';
import ProblemsList from '../components/ProblemsList';
import React, { useEffect, useState } from 'react';

interface Problem{
  problem_id: number;
  title: string;
  description: string;
  difficulty: string;
}

const IndexPage = () => {
  return (
 <>
 <div className="bg-gray-50">
      <header className="py-4 bg-white shadow">
        <h1 className="text-center text-4xl font-bold">CodeArena</h1>
      </header>
    </div>
    </> 
  );
};

export default IndexPage;
