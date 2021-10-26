import React, { useState } from 'react'
import './App.css'
const App = () => {


  // var index=0
  const [c,cc]=useState(0);
  const [work,setWork]=useState("")
  const [liwork,setliwork] = useState([])

const clear =()=>{

  setliwork([])
 cc(0);
}


const addtoarray = ()=>{

  setliwork((old)=>{
    return [...old,work]
  })
  cc(c+1)
setWork(" ")
}

    const captureData = (e)=>{
      setWork(e.target.value)

    }

    const deleteTodo = (id)=>{
      
      setliwork((old)=>{
        return(
          old.filter((arr,index)=>{
            return index!==id
          })
        )
      })
      cc(c-1)
    }
     
  return (
    <>
      

<div className="wrapper">
  <header>Todo App</header>
  <div className="inputField">
    <input type="text" placeholder="Add your new todo" onChange={captureData} value={work}/>
    <button onClick={addtoarray}>{"+"}</button>
  </div>
  <ul className="todoList">
   
     
     {
     liwork.map((single_work,index) =>{
                return (<>
                  <li key={index} >{single_work} <span className="icon" ><i className="fas fa-trash" onClick={()=>deleteTodo(index)}></i></span></li>
                  
                  </>
                )
        }) 
       }

   
  </ul>
  <div className="footer">
    <span>You have {c} pending tasks</span>
    <button onClick={clear} type="button">Clear All</button>
  </div>
</div>



<footer>- By Mohammad Tabish</footer>



  
    </>
  )
}

export default App
