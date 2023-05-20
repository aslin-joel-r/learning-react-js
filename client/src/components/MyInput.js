import MyApp from './MyApp.css'

export default function MyInput(){
    const info={
        name:'Aslin',
        age:20,

    }
    return(
        <div>
            <h3>Enter your name :</h3>
            <input type='text'></input>
            <h4>My name is {info.name} and I am {info.age} years old</h4>
        </div>
    )
}