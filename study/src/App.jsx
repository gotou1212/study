import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

 <div>
 <h2>TODOアプリ</h2>
 <ul>
 <li><input type="text" placeholder='タイトル'></input><button className="red-button">追加</button></li>
 <li><input type="checkbox"></input><span className="bake">1234</span><span><button className="blue-button">削除</button></span></li>
 <li><input type="checkbox"></input><span class="neko">222</span><button className="yellow-button">削除</button></li>
 <li><input type='text' placeholder="検索"></input></li>
</ul>


</div>
  )
}

export default App
