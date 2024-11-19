import Header from "./Header/Header"
import Form from "./Form/Form"
import { useEffect, useState } from "react";
import axios from "axios";
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar,Doughnut} from 'react-chartjs-2';
const App = () => {

  const [patients,setpatients] = useState([]);
  
  var children =0;
  var youth =0;
  var adult =0;
  var senior =0;
  var count=0


  useEffect(()=>{
    getpatients();
},[]);



const getpatients = () =>{
    axios.get('http://localhost/api2/admin/').then((response)=>{
      console.log(response.data);  // this will print the data from the API in the console.log
        setpatients(response.data);
    });
};


patients.forEach((item)=>{
  if(item.age==="Children")children++;
  else if(item.age==="Youth")youth++;
  else if(item.age==="Adult")adult++;
  else if(item.age==="Senior")senior++;
})
count=children+youth+adult+senior;
console.log(children);
console.log(adult);
console.log(youth);
console.log(senior);



  return (
    <div className="bg-zinc-200 h-screen w-screen " >

      <Header />

      <Form/>

      <div className="flex flex-col absolute top-[10vh] left-[50vh] gap-[4vh]  " >


      {/* Panel - 1 */}
      <div className= {` h-[40vh] w-[28vw]  rounded-xl shadow-2xl shadow-zinc-400 `}  >
        <div style={{background: "rgb(15,62,148)",background: "linear-gradient(90deg, rgba(15,62,148,1) 0%, rgba(0,31,66,1) 100%)"}} className="w-full h-[8vh] rounded-t-xl mb-[2vh] flex items-center justify-center " >
            <p className="text-center text-white " >Age Stats</p>
        </div>
        <Bar data={{labels:["Patients"],datasets:[{label:["Children"],data:[children]},{label:["Youth"],data:[youth]},{label:["Adult"],data:[adult]},{label:["Senior"],data:[senior]}],}} />
      </div>

      {/* Panel - 2 */}
      <div className= {` h-[40vh] w-[28vw]  rounded-xl shadow-2xl shadow-zinc-400  overflow-hidden  `}  >
        <div style={{background: "rgb(15,62,148)",background: "linear-gradient(90deg, rgba(15,62,148,1) 0%, rgba(0,31,66,1) 100%)"}} className="w-full h-[8vh] rounded-t-xl mb-[2vh] flex items-center justify-center "  >
            <p className="text-white" >Total Patients</p>
        </div>
      <div style={{ width: "200px", height: "200px" }}>
        <Doughnut
          data={{
            labels: ["Total Patients"],
            datasets: [
              {
                label: "Count",
                data: [count],
                backgroundColor: ["rgb(15,62,148)"],
              },
            ],
          }}
        />
    </div>
      </div>
      </div>




      {/* Only animation part */}

      <div style={{animation: 'custom-spin 4s linear infinite'}} className=" absolute bottom-[20vh] left-[6vh] w-[24vh] h-[24vh] rounded object-cover overflow-hidden object-center " >
          <img src="Images\Logo1.png" alt="" />
      </div>
      <div style={{animation: 'custom-spin 3s linear infinite'}} className=" absolute bottom-[12vh]  left-[11vh] w-[14vh] h-[14vh] rounded object-cover overflow-hidden object-center " >
          <img src="Images\Logo2.png" alt="" />
      </div>





      {/* Displaying list of patients */}

      <div className="h-[70vh] w-[35vw] absolute bottom-[10vh] right-[3vh] overflow-auto flex flex-col gap-[2vh] " >
        <p className="text-center text-lg font-medium " >Patient's List :</p>
        {patients.map((item,index) => {
          return(
            <div className="bg-zinc-100 rounded shadow-2xl shadow-zinc-300 h-[8vh] w-full flex gap-[8vh] items-center pl-[20vh]  " >
                <table className="border-separate border-spacing-4" >
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                </table>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
