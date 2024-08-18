import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <form action="">
      <label>Name:</label>
      <input type="text"  placeholder='enter your name' 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <label>Email:</label>
      <input type="email"  placeholder='enter your email' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input type="password"  placeholder='enter your password' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button>Submit</button>
    </form>

    <h1>Hello my name is {name} and my Email is {email}</h1>

    </>
      
  )
}

export default App
