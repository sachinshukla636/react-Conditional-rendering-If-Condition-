import React, { useState } from 'react';
function Profile() {
  const [loggedIn, setLoggedIn] = useState(true);
  // if (loggedIn) {
  //   return (
  //     <div>
  //       <h2>Welcome Sachin</h2>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h2>Welcome Guest</h2>
  //     </div>
  //   );
  // }
  return (
    <div>{loggedIn ? <h2>Welcome Sachin</h2> : <h2>Welcome Guest</h2>}</div>
  );
}

export default Profile;
