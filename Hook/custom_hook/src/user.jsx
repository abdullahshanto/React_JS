import usefetch from "./Hook/fetch";

function Users() {
  const { data, error, loading } = usefetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h3>Loading....</h3>;
  if (error) return <h2>Error found</h2>;
  if (!data) return null;

  return (
    <ul>
      <h1>Users Name</h1>
      {data.map((user) => (
        <li key={user.id}>
          {user.name } 
        </li>
      ))}
    </ul>
  );
}

export default Users;