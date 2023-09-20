import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Usercard from './Usercard';

const UserList = () => {
    const [users,setusers]=useState([])
    const Afficheruser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{setusers(res.data);console.log(res.data)})
        .catch(error => {
            
            console.log(error);
          });}
    useEffect(()=>{
        Afficheruser()
    },[])
  return (
    <div  className='Userlist'>
      {users.map(user=> <Usercard user={user} key={user.id} />)}
    </div>
  )
}

export default UserList
