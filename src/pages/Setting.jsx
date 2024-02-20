import BackButton from '../components/BackButton/BackButton'
import UnderDev from './UnderDev.png'

export default function Comments(){
return(
    <>

    <div className="flex h-[85vh] items-center justify-center">
        <div className='flex flex-col gap-4 justify-center items-center'>
        <span className=""> Comment Section Is Under Development!
        </span>

        <img  className='h-24 w-24' src={UnderDev} alt="img" />
        </div>

    </div>

    <BackButton></BackButton>
    </>
)

}