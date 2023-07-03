function Btn(){

    function clicked(){
        console.log('separate function')
    }
    return (
        <button onClick={clicked}>
            Click me
        </button>
    )
}

export default Btn;