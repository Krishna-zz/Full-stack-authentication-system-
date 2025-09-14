import { useState } from "react"


function Register(){

    const [formData, setFormdata] = useState({
        name:"",
        email:"",
        password:""
    })

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            if (res.ok) {
                setMessage("✅ Registration successful!")
                setFormdata({name: "", email: "", password: ""})
            } else {
                setMessage(`❌ ${data.message}`)
            }

        } catch (error) {
            setMessage("❌ Server error. Try again later.");
        }

    }

    return(
        <div className="bg-gray-300 min-h-screen flex items-center justify-center  ">
            <div className="bg-white shadow-2xl rounded-2xl max-w-md p-8 w-full">
                <h2 className="text-3xl font-bold text-center mb-13 text-gray-800">
                     Create Account
                </h2>

                <form action="" onSubmit={handleSubmit} className="flex-col items-center justify-center ">
                    <div className="mb-4">
                        <label className="mb-1 mr-2" htmlFor="">Username:</label>
                        <input className="py-2 w-65 px-5 shadow-md rounded-2xl " type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="mb-1  mr-10" htmlFor="">Email:</label>
                        <input className="py-2  w-65 px-5 shadow-md rounded-2xl" type="text"  />
                    </div>
                    <div className="mb-4">
                        <label className="mb-1 mr-3" htmlFor="">Password:</label>
                        <input className="py-2 w-65 px-5 shadow-md rounded-2xl" type="text" />
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="bg-blue-400 ml-35 px-4 py-2 hover:shadow-2xl flex  rounded-2xl">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register