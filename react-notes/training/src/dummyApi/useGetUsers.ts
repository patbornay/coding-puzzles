import { useEffect, useState } from "react"
import { getUsers } from "./fakeapi";
import type { User } from './types';

export const useGetUsers = () => {
  // todo add searchCriteria
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // todo add searchCriteria
      const response = await getUsers({});
      setUsers(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown error occurred when getting users');
    } finally {
      setLoading(false);
    }
  };
  return {users, loading, error};
}

const useGetUsers1 = () => {
  // state for holding promise data, loading state and error state
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  // trigger the async api call
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers({});
      setUsers(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown error occurred when getting users'); 
    } finally {
      setLoading(false);
    };
    return {users, loading, error};
  }
}

const useGetUsers2 = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers({});
      setUsers(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown error occurred when getting users');
    } finally {
      setLoading(false);
    }
  }

  return {users, loading, error};
}