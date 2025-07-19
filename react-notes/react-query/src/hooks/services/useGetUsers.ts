import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        'https://dummyjson.com/users'
      );
      return await response.json();
    },
  });

  return {
    isPending,
    error,
    data,
    isFetching,
  };
};
