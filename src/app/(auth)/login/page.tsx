import SignInForm from '@/components/form/SignInForm'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'><SignInForm /></div>
  )
}

export default page

//'use client'
// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';

// const LoginPage = () => {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   })
//   const [buttondDisabled, setButtonDisabled] = useState(false);
//   const onLogin = async() =>{
//     try {
//       const response = await axios.post("/api/users/login", user);
//       toast.success("login successful");
//       router.push('/');
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   }

//   useEffect(() => {
//     if(user.email.length && user.password.length) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user])
  
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen py-2'>
//       <h1>Log in</h1>
//       <hr />

//       <label htmlFor="email">email</label>
//       <input type="text" id='email' value={user.email} onChange={e => setUser({...user, email: e.target.value})} placeholder='email' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="password">password</label>
//       <input type="password" id='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})} placeholder='password' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <button className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600' onClick={onLogin}>
//         Log in
//       </button>
//       <Link href="/signup">Don't have an account?</Link>
//     </div>
//   )
// }

// export default LoginPage;