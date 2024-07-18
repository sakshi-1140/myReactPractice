import React,{useState} from 'react'

function Todo() {
    const[input,setInput]=useState('');
    const[Task,setTask]=useState([]);
    
    const handleInput=(e)=>{
        setInput(e.target.value);
    }

    const addTask =(e)=>{
        setTask([...Task,input]);
        setInput('');
        e.preventDefault();
    }

  return (
    <div>
        <form>
            <input type='text' onChange={handleInput}></input>
            <button onClick={addTask}>Add</button>
        </form>
        <div>
            <ol>
                {
                    Task.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
        </div>
    </div>
  )
}

export default Todo