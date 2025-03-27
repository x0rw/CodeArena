import { useEffect, useState } from 'react';
import ProblemsList from '../components/ProblemsList';

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
