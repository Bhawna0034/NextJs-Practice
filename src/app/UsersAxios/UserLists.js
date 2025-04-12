"use client"
import React, { useEffect, useState } from 'react'
import { getUser, postUser } from '../lib/axios'

const UserLists = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: ""
    });

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

    const handleInputChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    }

    const addNewUser = async() => {
        try{
            if(!newUser.name || !newUser.email)
                return alert("All fields are required");
            const response = await postUser(newUser);
            // console.info(response.data)
            setUsers([...users, response.data]);
            setNewUser({name: "", email: ""});
            // fetchUserLists();
        }catch(error){
            console.error("Failed to add new user: ", error.message);
        }
    }

    
   
    return (
    <div className='p-8'>
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
      <div>
        <form className='space-y-3 mb-3'>
            <div>
                <label htmlFor='name'></label>
                <input type='text' name='name' id='name' value={newUser.name} onChange={handleInputChange} className="border p-2 outline-none" placeholder='Enter your name' />
            </div>
            <div>
                <label htmlFor='email'></label>
                <input type='email' name='email' id='email' value={newUser.email} onChange={handleInputChange} className="border p-2 outline-none" placeholder='Enter your email' />
            </div>
        </form>
      </div>
      <button onClick={addNewUser} className='bg-black text-white px-4 py-2'>Add User</button>
      
    </div>
  )
}

export default UserLists
