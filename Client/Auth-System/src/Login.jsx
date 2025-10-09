import { useState } from "react"
import {loginUser} from './Services/Api'

function Login(){
      
    const [formdata, setFormdata] = useState({email:"", password:""})
    
    const handleChange = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {data} = await loginUser(formdata)
            localStorage.setItem('token', data.token)
            alert('Login Successful')
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    }

    return(
        <div className="bg-gray-400 min-h-screen flex justify-center items-center ">
            <div className="bg-white p-5 rounded-2xl shadow-2xl">
                
                    <h1 className="font-bold text-2xl mb-5 flex justify-center">Login</h1>
                
                
                <form  onSubmit={handleSubmit} action=""  className="flex flex-col">
                    <label  htmlFor="">Email:</label>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} className="px-4 py-2 rounded-2xl shadow-2xl ml-2 mb-6" />
                    <br />
                    <label htmlFor="">Password:</label>
                    <input type="text" name="password" placeholder="Password" onChange={handleChange} className="px-4 py-2 rounded-2xl shadow-2xl ml-1 mb-6" />

                    <button type="submit" className="bg-green-500 py-2 px-4 rounded-2xl shadow-2xl">
                        Login
                    </button>

              </form>
            </div>
            
        </div>
    )
}


export default Login