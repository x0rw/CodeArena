import Link from 'next/link';
import Navbar from '../components/navbar';
import ProblemsList from '../components/ProblemsList';
import React, { useEffect, useState } from 'react';

interface Problem {
  title: string;
  description: string;
  difficulty: string;
}

const IndexPage = () => {
  return (
 <div>
  <Navbar/>
  <ProblemsList/>
    </div> 
  );
};

export default IndexPage;
