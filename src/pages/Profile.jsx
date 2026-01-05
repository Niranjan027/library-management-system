function Profile({ user }) {
  return (
    <div className="page">
      <h2>User Profile</h2>
      <p><b>Name:</b> {user.username}</p>
      <p><b>Role:</b> {user.role}</p>
    </div>
  );
}

export default Profile;
