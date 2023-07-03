function Btn(){

    const clicked=()=>{
        console.log('clicked')
    }
    return (
        <button onClick={()=>{console.log("arrow function")}}>
            Click me
        </button>
    )
}

export default Btn;