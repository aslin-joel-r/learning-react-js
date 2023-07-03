function Btn(){
    var darkmode=true;
    const dark=<h1>Dark mode is on</h1>
    const light=<h1>Light mode is on</h1>
    function clicked(){
        darkmode=!darkmode
        
        darkmode==true ? console.log("darkmode is on") : console.log("darkmode is off");
    }
    return (
       <>
        {darkmode==true ? dark : light}
        <button onClick={clicked}>
            Click me
        </button>
        </>
    )
}

export default Btn;