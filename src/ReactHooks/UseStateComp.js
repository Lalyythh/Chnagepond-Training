import React,{useState, setCount} from 'react'


const UseStateComp = () => {
    const [count,setCount] =useState(0);
    const[name,setName] = useState("Lalith");
    const [course,setCourse] = useState(["ReactJS", "Amgular", "Python", "Java","MySql"]);

    const updatecount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h2>This is UseStatecomp</h2>
        <p>Count: <strong>{count}</strong></p>
        <button type='button' onClick={()=>updatecount()}>count++</button>{" "}
        <button type='button' onClick={()=>setcount(count+1)}>count++</button><hr/>
         <p>Name: <strong>{name}</strong></p>
         <button type='button' onClick={()=>setName("Lalith Kishore")}>Change Name</button>{" "}
         <ul>
            {
                course.map((value,index)=>{
                    return <li key={index}>{value}</li>
                })
            }
         </ul>

      
    </div>
  )
}

export default UseStateComp
