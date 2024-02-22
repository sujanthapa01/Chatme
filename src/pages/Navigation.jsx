import { NavLink } from "react-router-dom";
function Navigation(){
    return(
        <div className="flex justify-center items-center  h-screen">

    <div className="flex flex-col">
        <NavLink to='Profile' className='kode-mono-text text-[2rem] text-black hover:text-green-500'>Profile</NavLink>
        <NavLink to='Comments'className='kode-mono-text text-[2rem] text-black hover:text-green-500' >Comments</NavLink>
        <NavLink to='Login' className='kode-mono-text text-[2rem] text-black hover:text-green-500'>Login</NavLink>
    </div>


        </div>
    )
}

export default Navigation;