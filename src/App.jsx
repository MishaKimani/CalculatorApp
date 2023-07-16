import { useState } from 'react'


function App() {

  const [ num, setNum ] =useState(0)
  const [ num2, setNum2 ] =useState(0)
  const [ operator, setOperator] =useState('')

  const handleNum = (e)=>{
    const selectedNum= e.target.innerText
    console.log(selectedNum)

    if (num === 0) {
      setNum(selectedNum)}
     else {
      setNum(num + selectedNum)
    }
  }
  
  const add=(e)=>{
    const selectedNum= e.target.innerText

    const sum= num + selectedNum

    setNum(sum)

  }

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">

      <div className="w-1/4 h-5/6 bg-gray-800">

        <div className="w-full pr-10 mt-4 text-white text-3xl flex justify-end ">
          { num }
        </div>

        <div className="w-full mt-5 flex flex-wrap items-center justify-center">
          
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-blue-400 rounded-full">C</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-blue-400 rounded-full">+/-</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-blue-400 rounded-full">%</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-yellow-600 rounded-full">/</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">7</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">8</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">9</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-yellow-600 rounded-full">X</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">4</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">5</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">6</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-yellow-600 rounded-full">-</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">1</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">2</div>
          <div onClick= {handleNum} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">3</div>
          <div onClick= {add} className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-yellow-600 rounded-full">+</div>
          <div onClick= {handleNum} className="m-2 w-32 h-14 text-white text-2xl flex items-center pl-7 bg-gray-600 rounded-full">0</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-gray-600 rounded-full">.</div>
          <div className="m-2 w-14 h-14 text-white text-2xl flex items-center justify-center bg-yellow-600 rounded-full">=</div>

        </div>

      </div>

    </div>
      
  )
}

export default App
