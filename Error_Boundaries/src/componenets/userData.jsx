function Userdata({ user }) {
  return (
    <>
      <div className="com1">
        <h1>User Data</h1>
      <p>Name = {user.name}</p>
      <p>Age = {user.age}</p>
      </div>
    </>
  );
}

export default Userdata;