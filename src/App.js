import React from 'react';

function Sing( {name, picture} ) {
  return <div>
     <h2>I want to listen "{name}"</h2>
      <img src={picture} alt={name}/>
      </div>
}

const Ilikeit = [
  {
    name: "Downtown Baby",
    image:
    "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/009/688/81009688_1512548445712_1_600x600.JPG"
  },
  {
    name: "GIDDY UP",
    image:
    "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/257/792/81257792_1565770173576_1_600x600.JPG"
  },
  {
    name: "All I wanna do",
    image:
    "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/884/324/80884324_1476872348713_1_600x600.JPG"
  },
  {
    name: "So Rude",
    image:
    "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/075/149/81075149_1530256139186_1_600x600.JPG"
  },
]

function renderSing(text) {
  return <Sing name={text.name} picture = {text.image}/>}

function App() {
  return <div>{Ilikeit.map(renderSing)}
  </div>;
}

export default App;
