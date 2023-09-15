import User from './model/User';
import dbConnect from './utils/dbConnect';
import { redirect } from 'next/navigation';
const mongoose = require('mongoose');

export default function Home() {

  async function newUser(data){
    'use server'
    let name = data.get('name')?.valueOf();
    let lastname = data.get('lastname')?.valueOf();
    let email = data.get('email')?.valueOf();
    let age = data.get('age')?.valueOf();
    try{
        dbConnect();
        let newUser = new User({name,lastname,email,age});
        await newUser.save();
        console.log(newUser);
        }catch(e){
          console.log(e);
    }
    redirect('/show')
  }
  return (
    <div className=" w-full h-screenpy-24 py-28">
          <h1 className="font-bold text-center ">Create User</h1>
      <div className="flex justify-center">
        <form action={newUser} className='text-xl  text-black font-mono w-1/3'>
         <label>Name :</label>
          <input type='text' name="name" id="name" className='bg-slate-200 h-10 p-3 rounded-lg w-[100%]'></input>
          <label>last Name :</label>
          <input type='text' name="lastname" id="lastname" className='bg-slate-200  rounded-lg h-10 p-3 w-[100%]'></input>        
          <label>Email :</label>
          <input type='email' name="email" id="email" className='bg-slate-200 h-10 rounded-lg  p-3 w-[100%]'></input>        
          <label>Age :</label>
          <input type='number' name="age" id="age" className='bg-slate-200 h-10 rounded-lg  p-3 w-[100%]'></input>
         <button type='submit' className='bg-black text-white mt-3 h-8 w-20 rounded-md'>Sumbit</button>
        </form>
      </div>
    </div>
  )
}
