import { GetStaticProps, GetStaticPaths } from 'next';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code2, Play } from "lucide-react";

const problem = {
  title: "Two Sum",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  example: `Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]`,
};

interface Problem{
  problem_id: number;
  title: string;
  description: string;
  difficulty: string;
}

interface ProblemProps{
  problem: Problem;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:8080/api/problems');
  const problems: Problem[] = await res.json();

  const paths = problems.map((problem) => ({
    params: { id:problem.problem_id.toString()},
  }));

  return {
    paths,
    fallback: 'blocking', // or true/false
  };
};

// 2. Fetch data for each pre-rendered page
export const getStaticProps: GetStaticProps<ProblemProps> = async (context) => {
  const { id} = context.params!;
  
  const res = await fetch(`http://127.0.0.1:8080/api/problem/${id}`);
  const problem = await res.json();

  if (!problem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {problem},
    revalidate: 60, // Enable ISR: re-generate every 60 seconds
  };
};

export default function ProblemEditor({problem} : ProblemProps) {
  const [code, setCode] = useState("// Write your solution here\n");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Problem Section */}
      <Card className="p-4">
        <h2 className="text-xl font-semibold">{problem.title}</h2>
        <p className="text-gray-600 mt-2">{problem.body}</p>
        <pre className="p-2 mt-2 ">{problem.difficulty}</pre>
        <pre className="p-2 mt-2 ">{problem.tags}</pre>
      </Card>
      
      {/* Code Section */}
      <Card className="p-4 flex flex-col">
        <Tabs defaultValue="editor">
          <TabsList className="mb-2">
            <TabsTrigger value="editor"><Code2 size={16} className="mr-1" /> Editor</TabsTrigger>
          </TabsList>
          <TabsContent value="editor">
            <Textarea
              className="font-mono h-48 p-2 border rounded"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </TabsContent>
        </Tabs>
        <Button className="mt-4 flex items-center" onClick={() => alert("Run Code")}> <Play size={16} className="mr-1" /> Run Code </Button>
      </Card>
    </div>
  );
}
