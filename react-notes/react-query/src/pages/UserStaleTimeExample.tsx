import { useQuery } from "@tanstack/react-query";

export const UserStaleTimeExample = () => {
    const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        'https://dummyjson.com/users'
      );
      return await response.json();
    },
    staleTime: 8000,
  });

  return (
    <>
      <div>
        Notice that a query is not made immediately after reloading the component
      </div>
      <div>
        Data: {JSON.stringify(data)}
      </div>
    </>
  )
}