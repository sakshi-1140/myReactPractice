import React from "react";
import { useState } from "react";
function Employee() {
  const empData = [
    {
      name: "ram",
      age: 15,
    },
    {
        name:"Hari",
        age:16,
    },
  ];
const [data, setData]=useState(empData);
const [name, setName]=useState("");
const [age, setAge]=useState();
  const nameStore=(e)=>{
    e.preventDefault();
    setName(e.target.value);
  };
  const ageStore=(e)=>{
    e.preventDefault();
    setAge(e.target.value);
  };
  const addNewEmp=(e)=>{
    e.preventDefault();
    setData([...data,{name:name,age:age}]);
  };
  return (
  <div>
    <h1>Employee Khata</h1>
    <h2>ADD New Employee</h2>
    <form>
        <input type="text" placeholder="Name" id="name" onChange={nameStore}/>{" "}
        <input type="text" placeholder="Age" id="age" onChange={ageStore}/>
        <button onClick={addNewEmp}>Add New Employee</button>
    </form>
    <h2>Employee Details</h2>
    <ol>
        {data.map((item,index)=>{
            return(
                <li key={index}>
                    {item.name} {item.age}
                    <button>Delete</button>
                </li>
            )
        })}
    </ol>
  </div>);
}

export default Employee;
