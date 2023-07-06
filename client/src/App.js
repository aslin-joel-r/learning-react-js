import cat from './assests/image/cat.jpg'
function App() {

  let dog="https://www.bing.com/images/search?view=detailV2&ccid=DrRaGUhU&id=A4FE5F4D882F62BF6F607D3BE6EDCBF1B81F4901&thid=OIP.DrRaGUhUrnhCuLTmSfeY0gHaH0&mediaurl=https%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fPuppy-Dog-Transparent-PNG.png&exph=1776&expw=1683&q=dog+image+png&simid=608007970537224011&FORM=IRPRST&ck=7C404958BE236A18D6D422A7B0D57CD4&selectedIndex=1"
  
  return (
    <div>
     <img src={cat}/>
     <img src={require("./assests/image/cheetah.jpg")} />
     <img src={dog} alt='dog image'/>
    </div>
  )
}

export default App;
