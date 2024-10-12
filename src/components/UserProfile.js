import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      {/* TODO: Add more user profile information */}
    </div>
  );
}

export default UserProfile;
