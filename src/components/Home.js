// import React, { useEffect } from 'react'
// import Leftsidebar from './Leftsidebar'
// // import Feed from './Feed';
// import RightSidebar from './RightSidebar';
// import { Outlet,useNavigate } from 'react-router-dom';
// import {useOtherusers} from '../hooks/useOtherUsers';
// import { useSelector } from 'react-redux';


// const Home = () => {
//   const {user ,otherUsers }= useSelector(store => store.user);
//   const navigate = useNavigate();
//   useEffect(()=>{
//     if (!user){
//       navigate("/");
//     }
//   },[user,navigate]);
  
//   useOtherusers(user?._id);
  
  
//   return (
//     <div className='flex justify-between w-[80%] mx-auto '>
//       <Leftsidebar/>
//       <Outlet/>
//        <RightSidebar otherUsers={otherUsers} />
//     </div>
//   )
// }

// export default Home;


import React, { useEffect } from 'react'
import Leftsidebar from './Leftsidebar'
// import Feed from '/Feed';
import RightSidebar from './RightSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import useOtherUsers from '../hooks/useOtherUsers'; // ✅ Default import
import { useSelector } from 'react-redux';

const Home = () => {
  const { user, otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useOtherUsers(user?._id); // ✅ Make sure this is named consistently

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <Leftsidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers} />
    </div>
  );
};

export default Home;