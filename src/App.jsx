import { useState } from 'react'
import './App.css'

function App() {

  const monkeysList = [{id: 1, name: "Macaco Dentuço", src: "/macaco1.jpg"},
                       {id: 2, name: "Mico leao dourado", src: "/macaco2.jpg"},
                       {id: 3, name: "Orangotango", src: "/macaco3.jpg"}]

  const [monkey, setMonkey] = useState(monkeysList[0])

  const nextMonkey = () => {
    
    setMonkey((prev) => {
      if (prev.id == 3) {
        return monkeysList[0]
      } else {
        return monkeysList[prev.id]
      }
    })

  }

  const backMonkey = () => {

    setMonkey((prev) => {
      if (prev.id == 1) {
        return monkeysList[monkeysList.length-1]
      } else {
        return monkeysList[prev.id-2]
      }
    })

  }


  return (
    <>
      <h1>Macacos</h1>

      <div className='container'>
        <img src="/icons8-back-arrow-50.png" className='arrow' onClick={backMonkey}/>

        <div>
          <p>{monkey.id}/3</p>
          <h3>{monkey.name}</h3>
          <img src={monkey.src} className='monkey'/>
        </div>
        
        <img src="/icons8-next-page-50.png" className='arrow' onClick={nextMonkey}/>
      </div>
    </>
  )
}

export default App
