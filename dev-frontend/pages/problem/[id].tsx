import { useRouter } from 'next/router';

export default function ProblemPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Problem ID: {id}</div>;
}
