import { useEffect, useState } from "react"
import { getSkills } from "./fakeapi";
import type { Skill } from "./types"; // never had to import like that b4??

export const useGetSkills = ({ids}: {ids: number[]}) => {
  const [skills, setSkills] = useState<Skill[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const response = await getSkills(ids);
      console.log('skills', response);
      setSkills(response);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown error occurred while getting skills');
    } finally {
      setLoading(false);
    }
  }

  return { skills, loading, error };
}