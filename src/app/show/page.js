import React from 'react'
import dbConnect from '../utils/dbConnect'
import User from '../model/User'
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function show(){

    const users = await User.find();

    async function deleteUser(data){
      "use server"
      let id = JSON.parse(data.get('id')?.valueOf());
      await User.deleteOne({_id:id});
      redirect('/show')
    }
  return (
    <div>
  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white text-center my-10">All Users</h2>
    <table class="w-2/3 ml-40 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-50 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                    LstName
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>                
                <th scope="col" class="px-6 py-3">
                    Action 
                </th>
            </tr>
        </thead>
        <tbody>
            
          {users.map((user)=>(
            <tr key={user._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
         
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td className='flex'>
            <form action={deleteUser}>
            <input type='hidden' name='id' id='id'
             value={JSON.stringify(user._id)} />
            <button className='text-white bg-red-600 h-8 w-20 rounded-md'>
                Delete
              </button>
            </form>

              <Link href={'/edite/' + user._id}>
              <button className='text-white ml-3 bg-blue-600 h-8 w-20 rounded-md'>
                Edit
              </button>
              </Link>           

            </td>
          </tr>

        ))}
        </tbody>
    </table>
    </div>
  )
}

export default show
