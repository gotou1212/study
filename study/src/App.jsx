import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

 <div>
 <button className="red-button">click</button>
 <button className="blue-button">test2</button>

{/* TODO yellow-buttonで黄色のボ黄色のボタンを作ってみる*/}
{/*TODO高さ２００px 横幅２００pxのボタンを作ってみる。cssのwidth,heightを調べてみる*/}
</div>
  )
}

export default App
