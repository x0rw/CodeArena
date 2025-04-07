"use client"

import Footer from "@components/Footer.tsx";
import { Navbar } from "@components/Navbar.tsx";
import { Button } from "@components/ui/button.tsx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card"

const ArticleCard = ({ title, excerpt }: { title: string; excerpt: string }) => (
  <div className="p-6 bg-accent rounded-lg transition-all duration-300 hover:shadow-lg animate-fade-in">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{excerpt}</p>
    <div className="mt-4">
      <Button className="text-primary hover:underline">Read more &rarr;</Button>
    </div>
  </div>
);

export default function ProblemsList() {
  //  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      excerpt: "Learn the basics of data structures and their implementations"
    },
    {
      id: 2,
      title: "Dynamic Programming Fundamentals",
      excerpt: "Master the art of solving complex problems with dynamic programming"
    },
    {
      id: 3,
      title: "Graph Algorithms Explained",
      excerpt: "Explore different graph algorithms and their applications"
    },
    {
      id: 4,
      title: "System Design Principles",
      excerpt: "Understand the core principles of designing large-scale systems"
    }
  ];

  const popularProblems = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Merge Intervals", difficulty: "Medium" },
    { id: 3, title: "LRU Cache", difficulty: "Hard" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Articles</h2>
              <Button
                className="mt-4 md:mt-0 px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent/80 transition-colors"
                onClick={() => console.log("/articles")}
              >
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} title={article.title} excerpt={article.excerpt} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Popular Problems</h2>
              <Button
                className="mt-4 md:mt-0 px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent/80 transition-colors"
                onClick={() => console.log("/problem")}
              >
                View All
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {popularProblems.map((problem) => (
                    <tr key={problem.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {problem.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${problem.difficulty === "Easy" ? "bg-green-900 text-green-100" :
                          problem.difficulty === "Medium" ? "bg-yellow-900 text-yellow-100" :
                            "bg-red-900 text-red-100"
                          }`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                        <Button
                          className="text-primary hover:underline"
                          onClick={() => console.log(`/problem/${problem.id}`)}
                        >
                          Solve &rarr;
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

/*
import React, { useEffect, useState } from 'react';
import ProblemsList from '../../components/problems/ProblemsList.tsx';

interface Problem {
  problem_id: number;
  title: string;
  description: string;
  difficulty: string;
}

const ProblemsPage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8080/api/problems");
        console.log(res);
        if (!res.ok) throw new Error('Failed to fetch problems');
        const data = await res.json();
        setProblems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ProblemsList problems={problems} />
    </div>
  );
};

export default ProblemsPage;
*/
