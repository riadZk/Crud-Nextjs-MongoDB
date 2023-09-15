import { redirect } from "next/navigation"
import dbConnect from "@/app/utils/dbConnect"
import User from "@/app/model/User"

async function page({params}){
   dbConnect();
   const user = await User.findOne({_id: params.id});

async function updateUser(data){
    'use server';
    let name = data.get('name')?.valueOf();
    let lastname = data.get('lastname')?.valueOf();
    let email = data.get('email')?.valueOf();
    let age = data.get('age')?.valueOf();
    let updateU = await User.findByIdAndUpdate({_id: params.id},{name,lastname,email,age})
    console.log(updateU);
    redirect('/show')
}
  return (
    <div>
    <div className="flex justify-center">
    <form action={updateUser} className='text-xl mt-20 text-black font-mono w-1/3'>
    <label>Name :</label>
              <input type='text' 
              name="name" id="name"
               className='bg-slate-200 h-10 p-3 rounded-lg w-[100%]'
               defaultValue={user.name}  />
          <label>last Name :</label>
              <input type='text' name="lastname" id="lastname" defaultValue={user.lastname}  className='bg-slate-200  rounded-lg h-10 p-3 w-[100%]' />        
          <label>Email :</label>
              <input type='email'  name="email" id="email"  defaultValue={user.email} className='bg-slate-200 h-10 rounded-lg  p-3 w-[100%]' />        
          <label>Age :</label>
             <input type='number'name="age" id="age" className='bg-slate-200 h-10 rounded-lg  p-3 w-[100%]'  defaultValue={user.age} />
         <button type='submit' className=" bg-black text-white mt-4 h-8 w-20 rounded-md">Sumbit</button>
         </form>

    </div>

    </div>
  )
}

export default page

