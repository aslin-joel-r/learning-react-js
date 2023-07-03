function Btn(){

    const clicked=()=>{
        console.log('clicked')
    }
    return (
        <button onClick={function(){console.log("ananymous function")}}>
            Click me
        </button>
    )
}

export default Btn;