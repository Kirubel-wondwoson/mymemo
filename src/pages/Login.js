import { useState } from "react"
import './Login.scss'
const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form>
      <h1>Login</h1>
      <input
        placeholder="Username"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}>
      </input> 

      <br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}>
      </input>

      <br />
      <button className="btn">
        Login
      </button>
    </form >
  )
}
export default Login