import { useRef, useState } from "react";
import axios from "axios";

const Form = () => {

    const [inputs,setinputs] =  useState({});
    const register = useRef(null);

    const handleChange = (e)=>{
        setinputs((values)=>{
            return {...values, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = (e) => {
         e.preventDefault();
         const age = register.current.value;
         console.log(age);
        axios.post(`http://localhost/api2/admin/${age}`, inputs).then((response)=>{
            console.log(response.data);
            setinputs(response.data);
        });

    }

    return (
   
       <form onSubmit={handleSubmit} className=" ml-[2vh] mt-[2vh]  flex flex-col gap-[3vh]  w-[18%] h-[40%] hover:scale-[1.02] duration-300  bg-zinc-100 shadow-2xl shadow-zinc-400 rounded-xl " >
        <div style={{background: "rgb(15,62,148)",background: "linear-gradient(90deg, rgba(15,62,148,1) 0%, rgba(0,31,66,1) 100%)"}} className=" h-[6vh]  rounded-t-xl flex justify-center items-center " >
            <p className="text-white" >Details</p>
        </div>
          <label className="pl-[2vh]" >
             Enter name :<br/>
             <input name="name" onChange={handleChange} className="rounded"  type="text" placeholder="Enter name" />
          </label>
          <label className="pl-[2vh]" >
             Select age category :<br/>
             <select ref={register} className="rounded" name="" id="">
                <option disabled selected value="">Select</option>
                <option  value="Children">0-14</option>
                <option value="Youth">15-24</option>
                <option value="Adult">25-64</option>
                <option value="Senior">65+</option>
             </select>
          </label  >
          <label className="pl-[2vh]" >
            <input className="rounded text-sm " type="file" /><br/>
          </label>
          <input onSubmit={handleSubmit} style={{background: "rgb(15,62,148)",background: "linear-gradient(90deg, rgba(15,62,148,1) 0%, rgba(0,31,66,1) 100%)"}} className=" ml-[2vh] shadow-2xl shadow-zinc-400 p-[.5vh] w-[6vw] rounded-md text-white " type="submit" value="Submit" />
       </form>
    )
  }
  
  export default Form