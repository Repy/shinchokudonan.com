import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="title">進捗どうなん.com</h1>
      <div className="fixed-grid">

        <div className="grid">
          <div className="cell card">
            <header className="card-header">
              <h2 className="card-header-title">進捗どうなん.com とは？</h2>
            </header>

          </div>
          <div className="cell">Cell 2</div>


        </div>
      </div>
    </>
  )
}

export default App
