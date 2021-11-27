// create your App component here
import React, {useState, useEffect} from "react"

function App (){
const [doggo, setDoggo] = useState(null)

useEffect (()=>{
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then (resp => resp.json())
    .then (dogData => setDoggo(dogData.message))
}, [])

if (!doggo) return <p> Loading... </p>;


return <img src={doggo} alt="A Random Dog"/>

}

export default App