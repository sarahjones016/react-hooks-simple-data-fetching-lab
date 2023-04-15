import React, { useState, useEffect } from 'react'

function App() {

  const [dogs, setDogs] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      setDogs(data)

    })
  }, [])

if (!dogs) {
  return <p>"Loading..."</p>
}

  return (
    <div>
      <img src={dogs.message} alt="A Random Dog"></img>
    </div>
  )
}

export default App
