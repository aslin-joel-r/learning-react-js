function First(props){

    const style={
        color:'red',

    }
    console.log(props)
    return <h2 style={style} >Hello ,{props.name} </h2>
}


export default First;