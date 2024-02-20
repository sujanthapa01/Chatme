import { NavLink } from 'react-router-dom'
import backButton from './backButton.png'
export default function BackButton(){
    return(
        <div className='sticky bottom-3 flex justify-center'>
            <NavLink to='/' className="">  <img src={backButton} alt="<BACK" /></NavLink>
        </div>
    )
}