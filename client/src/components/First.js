function First(props){

    const style = {
        color: 'red',
        fontSize: '200px',
        backgroundColor: 'black'
    };
    console.log(props)
    return <h2 style={style} >Hello ,{props.name} </h2>
}


export default First;