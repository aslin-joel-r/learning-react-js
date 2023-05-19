export default function MyButton(){
    function clickedMe(){
        alert("You clicked me");
    }
    return(
        <button onClick={clickedMe()}>I am a Button</button>
    )
}