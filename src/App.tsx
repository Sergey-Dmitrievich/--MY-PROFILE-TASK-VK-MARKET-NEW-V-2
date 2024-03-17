import Left from "./components/Left component/Left"
import Right from "./components/Right component/Right"
import './App.css'
import { useState } from "react"
export default function App() {
  const [data, setData]:any = useState([]);
  const [amount, setAmount] = useState(0)
  return (
    <div className="main">
      <div className="left">
      <Left
      setAmount={setAmount}
      amount = {amount}
      data = {data}
      setData = {setData}/>
      </div>
      <div className="right">
      <Right
        setAmount={setAmount}
        amount = {amount}/>
      </div>
    </div>
  )
}
