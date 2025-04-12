"use client"
import React, { useEffect, useState } from 'react'
import { getUser } from '../lib/axios'

const UserLists = () => {
    const [users, setUsers] = useState([]);

    const fetchUserLists = async() => {
        try{
            const response = await getUser();
            const data = response.data;
            // console.info(data);
            setUsers(data);
        }catch(error){
            console.error("Failed to fetch data: ", error.message);
        }
    }

    useEffect(() => {
        fetchUserLists();
    },[]);
   

    

  return (
    <div>
      <table className='w-full border-collapse mb-4'>
        <thead>
            <tr className='border bg-gray-100 font-bold'>
                <th className='text-left px-2 py-1'>UserId</th>
                <th className='text-left px-2 py-1'>Name</th>
                <th className='text-left px-2 py-1'>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => {
                    return <tr key={user.id} className='border mb-2'>
                        <td className='text-left px-2 py-1'>{user.id}</td>
                        <td className='text-left px-2 py-1'>{user.name}</td>
                        <td className='text-left px-2 py-1'>{user.email}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UserLists
