function First(props){

    const style = {
        color: 'red',
        fontSize: '60px',
        backgroundColor: 'black'
    };
    console.log(props)
    return (
        <>
        {props.content}
        </>
    )
}


export default First;