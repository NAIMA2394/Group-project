// import './App.css'
// import { useState, usestate } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const [done, setDone] = useState({})
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  const toggleDone = (index) => {
    setDone({ ...done, [index]: !done[index] })
  }
  return (
    <>
      <div className="naima">
        <h1>groceries</h1>
        <p>make your order down here</p>
        <input type='text'
          placeholder='Enter item'
          value={task}
          className="taskInput"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => {
          if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("")
          }
        }} className='taskBtn'>Add Item</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: done[index] ? "line-through" : "none" }}>{task}
              <button className="doneBtn" onClick={() => toggleDone(index)}>Done</button>
              <button onClick={() => removeTask(index)} className="RemoveBtn">Remove Item</button>
            </li>
          ))}
        </ul>
        <button className='clearBtn' onClick={() => setTasks([])}>Clear Item</button>
      </div>
    </>
  )
}

export default App;  