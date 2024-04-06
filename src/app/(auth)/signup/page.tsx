import SignUpForm from '@/components/form/SignUpForm'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'><SignUpForm /></div>
  )
}

export default page


// 'use client'

// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';

// const Signup = () => {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     username: "",
//   })
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [allOk, setAllOk] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const onSignup = async() =>{
//     try {
//       const response = await axios.post("/api/users/signup",user);
//       console.log("signup success", response.data);
//       toast.success("Success");
//       router.push("/login");
//     } catch (error: any) {
//       console.log("signup failed", error.message);
//       toast.error(error.message);
//     }
//   }

//   useEffect(() => {
//     if(user.email.length && user.password.length && user.username.length) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//     if(user.password !== confirmPassword) {
//       setButtonDisabled(true);
//       setAllOk(false);
//     } else {
//       setButtonDisabled(false);
//       setAllOk(true);
//     }
//   }, [user, setAllOk, confirmPassword]);
  
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen py-2'>
//       <h1 className='pb-3 text-3xl'>Sign Up</h1>
//       <hr />
//       <label htmlFor="name">name</label>
//       <input type="text" id='name' value={user.name} onChange={e => setUser({...user, name: e.target.value})} placeholder='name' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="username">username</label>
//       <input type="text" id='username' value={user.username} onChange={e => setUser({...user, username: e.target.value})} placeholder='username' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="contact">contact</label>
//       <input type="text" id='contact' value={user.contact} onChange={e => setUser({...user, contact: e.target.value})} placeholder='contact' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="email">email</label>
//       <input type="text" id='email' value={user.email} onChange={e => setUser({...user, email: e.target.value})} placeholder='email' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="password">password</label>
//       <input type="password" id='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})} placeholder='password' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>

//       <label htmlFor="confirmPassword">confirm password</label>
//       <input type="password" id='confirmpassword' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='confirm password' className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none text-black'/>
//       {allOk ? "" : <p>password is not matching</p>}

//       <button className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600' onClick={onSignup}>
//         {buttonDisabled ? "No sign up" : "Sign Up"}
//       </button>
//       <Link href="/login">Already have an account?</Link>
//     </div>
//   )
// }

// export default Signup;