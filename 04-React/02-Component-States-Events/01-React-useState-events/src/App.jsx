import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Activity from './components/Activity'
import Form from './components/form-act1'
import FormAct2 from './components/formAct2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useState and counters</h1>
      <div className="card">

        <Counter/>

        <Activity
        activityName="useState and Forms" 
        description="Validating a form with  an input state">
          <Form/>
        </Activity>

        <Activity
        activityName="Managing input states from a form"
        description="Setting states from inputs to modificate component">

          {/* <FormAct2/> */}
        </Activity>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        useStates Practice ~ Using this space, because I still have not finished my workspace yet
      </p>
    </>
  )
}

export default App
