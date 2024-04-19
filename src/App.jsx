import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [todo, settodo] = useState("");
  const [lists, setlists] = useState([]); 
  const [text, settext] = useState();
  const ul = useRef();
  // const [isComplete, setisComplete] = useState(true);
  const editing = useRef();
  function handleChange(e) {
    settodo(e.target.value);
  }
  const displayTodos = () => {
    setlists([...lists, todo]);
    settodo("");
  };
  const check = useRef();
  const inp = useRef();
  const [finished, setfinished] = useState([]);
  const [isComplete, setisComplete] = useState([]);
  const handlefinished = (e) => {
    if (e.target.checked) {
      e.target.parentNode.className = "line-through";
      //console.log(e.target.value);
      setisComplete([...isComplete, e.target.value]);
      // setfinished([...finished,e.target.parentNode.innerText]);
      // console.log(e.target.parentNode);
    } else {
      e.target.parentNode.className = "";
      isComplete.pop();
      setisComplete([...isComplete]);
    }
    // setfinished([])
    // console.log(e.target.parentNode);
  };
  const finishedItems = useRef();
  const displayfinished = (e) => {
   if(e.target.checked) 
   {finishedItems.current.className='';
  //  console.log(check);
  }
   else finishedItems.current.className='hidden';
  };
  const handleDelete=(e)=>{
    // console.log(e.target.value);
   let newlist= lists.filter(item=>{
      return item!=e.target.value; 
    } 
    )
    let newcomplete=isComplete.filter(item=>{
      return item!=e.target.value;
    })
    setlists(newlist);
    setisComplete(newcomplete);
  }
  // console.log(typeof lists)
  return (
    <>
      <Navbar />
      <div className="bg-purple-300  w-80 mx-auto min-h-80 flex justify-center items-center flex-wrap mt-10">
        <div className="text-center">
          <h1>
            <b>Manage your tasks</b>
          </h1>
          <p className="mt-4">
            {" "}
            <b>Add a todo</b>
          </p>
        </div>
        <div className="flex flex-wrap justify-around items-center">
          <input
            type="text"
            className="w-11/12 "
            value={todo}
            onChange={handleChange}
            ref={editing}
          />

          <button
            className="bg-blue-400  mt-4 w-72  border-black border-solid active:border-2"
            onClick={displayTodos}
          >
            save
          </button>
        </div>
        <div>
          <div className="m-4 bg-slate-100 ">
            <h2 className="text-center">
              <b>Todos</b>
            </h2>
            <ul ref={ul}>
              {lists.map((item) => {
                return (
                  <>
                  <li ref={check} >
                    <input ref={inp}  value={item} type="checkbox" onClick={handlefinished} className="m-3" />
                    {item}
                    <button value={item} className="bg-blue-400 m-3  border-black border-solid active:border-2 rounded" onClick={handleDelete}>Delete</button>
                  </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="text-center">
            <input type="checkbox" name="" id="" onClick={displayfinished} />
            showfinished
            <ul className="hidden" ref={finishedItems}>
              {isComplete.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );}
