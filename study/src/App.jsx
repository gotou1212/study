
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 状態 -> State
// on〇〇 -> イベントハンドラー上で状態を変更する
function App() {
  const [todoList, setTodoList] = useState([
    "todo1",
    "todo2",
    "todo3",
    "todo4"
  ]);

  const handleClick = () => {
    const newTodoList = todoList.map((todo) => {
      return todo + "a";
    })

    // console.log(newTodoList);
    setTodoList(newTodoList);
  }

  return (
    <div className='todoapp'>
      <div className='todoapp-title'>TODOアプリ</div>

      <div className='todoapp-add'>
        <input type="text" className='todoapp-input__add' />
        <button
          className='todoapp-button__add'
          onClick={(e) => {
            handleClick();
          }}
        >
          追加
        </button>
      </div>

      <ul className=''>
        {todoList?.map(todo => {
          return (
            <div key={todo}>
              {todo}
            </div>
          )
        })}
      </ul>

      <div>
        <input type="text" className='todoapp-input__search' />
      </div>

    </div>
  )
}

export default App