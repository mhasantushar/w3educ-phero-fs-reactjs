import React, { use } from 'react';

const Users2 = ({userDataPromise}) => {

  const userData = use(userDataPromise);
  // console.log(userData);

  return (
    <div>
      <h2>This is User2</h2>
    </div>
  );
};

export default Users2;