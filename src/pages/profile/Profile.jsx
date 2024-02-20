// image
import profile from "./profile.jpeg";
// components
import BackButton from "../../components/BackButton/BackButton";
import Projects from "../../components/BackButton/Projects/Projects";

export default function Profile() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col my-8 ">
        <img
          className="h-64 w-64 shadow-stone-400 shadow-md  rounded-3xl hover:shadow-purple-300  duration-200 "
          src={profile}
          alt=""
        />
        <h1 className="kode-mono-text text-[1.5rem] my-4 md:text-[4rem] xl:text-[4rem]">
          Hey im sujan Thapa
        </h1>
      </div>

      <div className="flex flex-col md:flex-row xl:flex-row ">
        <div className=" w-screen p-8 md:w-[50%] xl:w-[50%] ">
          <h1 className="kode-mono-text text-3xl  ">this is heading</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit atque
            maxime itaque id enim, sit necessitatibus doloremque error tempore
            ex aliquam unde ipsa officiis ducimus dicta qui illum tenetur iure
            alias ullam adipisci sapiente. Consectetur officiis et accusamus
            cumque omnis odit sed? Aperiam error illum tenetur ex, voluptate rem
            iure corrupti perspiciatis mollitia libero ea amet cum ipsum
            expedita, possimus ratione voluptates impedit. Soluta vitae minima
            dolorem accusantium autem, ab excepturi ipsam doloremque repudiandae
            fuga illum aut id eos officia fugiat amet. Ullam saepe provident
            eius error repellendus quibusdam, sapiente accusantium expedita est
            placeat laborum eveniet cupiditate accusamus praesentium!
          </span>
        </div>
        <div className=" w-screen p-8 md:w-[50%] xl:w-[50%]">
          <h1 className="kode-mono-text text-3xl w-[50%]">this is heading</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit atque
            maxime itaque id enim, sit necessitatibus doloremque error tempore
            ex aliquam unde ipsa officiis ducimus dicta qui illum tenetur iure
            alias ullam adipisci sapiente. Consectetur officiis et accusamus
            cumque omnis odit sed? Aperiam error illum tenetur ex, voluptate rem
            iure corrupti perspiciatis mollitia libero ea amet cum ipsum
            expedita, possimus ratione voluptates impedit. Soluta vitae minima
            dolorem accusantium autem, ab excepturi ipsam doloremque repudiandae
            fuga illum aut id eos officia fugiat amet. Ullam saepe provident
            eius error repellendus quibusdam, sapiente accusantium expedita est
            placeat laborum eveniet cupiditate accusamus praesentium!
          </span>
        </div>
      </div>

    
<Projects></Projects>
      <BackButton/>
    </div>
  );
}
