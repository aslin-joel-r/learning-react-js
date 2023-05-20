import { useState } from "react";

export default function MyButton(){
    function clickedMe(){
        alert("You clicked me");
    }
    const [count,setCount]=useState(0);
    function clickedMe(){
        setCount(count+1);
    }
    return(
        <button onClick={clickedMe}>click me {count}</button>
    )
}