import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

function Users() {

  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>Users</h1>

      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
}
 
export default Users;