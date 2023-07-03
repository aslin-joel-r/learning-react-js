const Second=()=> {
    var val=7;

    val = val ==4 ? console.log('if statement'):console.log('else statement');
    return (
        <div>
            <h2>{val ==4 ? 'if statement':'else statement'}</h2>
        </div>
    )
}

export default Second