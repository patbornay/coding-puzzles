import { useGetUsers } from "../hooks/services/useGetUsers";

export const UserDefaultExample = () => {
  const { isPending, error, data, isFetching } = useGetUsers();

  return (
    <>
      This is the user page
      <div>
        <p>isPending: {isPending ? "true" : "false"}</p>
        <p>error: {JSON.stringify(error)}</p>
        <p>data: {JSON.stringify(data)}</p>
        <p>isFetching: {isFetching ? "true" : "false"}</p>
      </div>
    </>
  );
};
