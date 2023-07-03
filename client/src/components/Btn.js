function Btn(){

    const clicked=()=>{
        console.log('clicked')
    }
    return (
        <button onClick={clicked}>
            Click me
        </button>
    )
}

export default Btn;