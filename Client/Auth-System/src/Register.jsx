import { useState } from "react"
import {registerUser} from './Services/Api'

function Register() {

   const [formdata, setFormdata] = useState({name:"", email:"", password:""})


   const handleChange = (e) => {
      setFormdata({...formdata, [e.target.name]: e.target.value})
   }

   const handleSubmit = async(e) => {
      e.preventDefault()

      try {
         const {data} = await registerUser(formdata)
         alert(data.message)
      } catch (error) {
          alert(error.response?.data?.message || 'Registration failed');
      }
   }

  return (
    <div className="min-h-screen bg-gray-600 flex justify-center items-center ">
            <div className="bg-white rounded-2xl shadow-2xl p-6 ">
                <div className="flex justify-center">
                     <h1 className="font-bold text-2xl">Register</h1>
                </div>
                
                 <form onSubmit={handleSubmit} action="">
                  <div className="">
                    <label htmlFor="">Username</label>
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2" onChange={handleChange} name="name" placeholder="Username" type="text" />
                 </div>
                 <div className="">
                    <label htmlFor="">Email</label>
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2 ml-8" onChange={handleChange} name="email" placeholder="Email" type="text" />
                 </div>
                 <div className="">
                    <label htmlFor="">Password</label>   
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2" onChange={handleChange} name="password" placeholder="Password" type='password' />
                 </div>

                 <div className="flex justify-center mt-5">
                    <button type="submit" className="bg-blue-400 rounded-xl shadow-xl px-4 py-2">Register</button>
                 </div>
                 </form>
            </div>
    </div>
  )
}

export default Register