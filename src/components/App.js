import React, {useState, useEffect} from 'react'

function App() {

const [dogImage, setDogImage] = useState(false)

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    setDogImage(data)
  })
}, [])

if (!dogImage) {
  return <p>Loading...</p>
}

  return (
    <div>
      <img src={dogImage.message} alt="A Random Dog"></img>
    </div>
  )
}

export default App
