

function Register() {




  return (
    <div className="min-h-screen bg-gray-600 flex justify-center items-center ">
            <div className="bg-white rounded-2xl shadow-2xl p-6 ">
                <div className="flex justify-center">
                     <h1 className="font-bold text-2xl">Register</h1>
                </div>
                
                 <div className="">
                    <label htmlFor="">Username</label>
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2" type="text" />
                 </div>
                 <div className="">
                    <label htmlFor="">Email</label>
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2 ml-8" type="text" />
                 </div>
                 <div className="">
                    <label htmlFor="">Password</label>
                    <input className="px-5 py-3 shadow-2xl rounded-xl m-2" type='password' />
                 </div>

                 <div className="flex justify-center mt-5">
                    <button className="bg-blue-400 rounded-xl shadow-xl px-4 py-2">Register</button>
                 </div>
            </div>
    </div>
  )
}

export default Register