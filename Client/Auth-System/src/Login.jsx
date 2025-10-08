

function Login(){

    
    

    return(
        <div className="bg-gray-400 min-h-screen flex justify-center items-center ">
            <div className="bg-white p-5 rounded-2xl shadow-2xl">
                
                    <h1 className="font-bold text-2xl mb-5 flex justify-center">Login</h1>
                
                
                <form  action=""  className="flex flex-col">
                    <label  htmlFor="">Email:</label>
                    <input type="text" className="px-4 py-2 rounded-2xl shadow-2xl ml-2 mb-6" />
                    <br />
                    <label htmlFor="">Password:</label>
                    <input type="text" className="px-4 py-2 rounded-2xl shadow-2xl ml-1 mb-6" />

                    <button className="bg-green-500 py-2 px-4 rounded-2xl shadow-2xl">
                        Login
                    </button>

              </form>
            </div>
            
        </div>
    )
}


export default Login