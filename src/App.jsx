import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [monkey, setMonkey] = useState({id: 1, name: "Macaco Dentuço", src: "/macaco1.jpg"})

  let monkeys = [{id: 1, name: "Macaco Dentuço", src: "/macaco1.jpg"},
                 {id: 2, name: "Mico leao dourado", src: "/macaco2.jpg"},
                 {id: 3, name: "Orangotango", src: "/macaco3.jpg"}]

  const nextMonkey = () => {
    

    
  }

  const backMonkey = () => {
    
    console.log(count)
    setCount(count-1)
    setMonkey(monkeys[count])
    console.log(count)

  }


  return (
    <>
      <h1>Macacos</h1>

      <div className='container'>
        <img src="/icons8-back-arrow-50.png" className='arrow' onClick={backMonkey}/>

        <div>
          <p>{monkey.id}/3</p>
          <h3>{monkey.name}</h3>
          <img src={monkey.src} />
        </div>
        
        <img src="/icons8-next-page-50.png" className='arrow' onClick={nextMonkey}/>
      </div>
    </>
  )
}

export default App
