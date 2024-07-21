import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Layout from './pages/Layout'
import Login from './pages/Login'
import Home from './pages/(logged-in)/Home'
import DashBoard from './pages/(logged-in)/DashBoard'


// import Blogs from './pages/Blogs'
// import Contact from './pages/Contact'
// import NoPage from './pages/NoPage'
// function Car (){
//   return <h2>I'm a Car Function Component</h2>
// }
// class Car2 extends React.Component{
//   render(){
//     return <h2>I'm a Car Class Component</h2>
//   }
// }
// const Form = ()=>{
//   return(
//     <form>
//       <label>Enter your name:
//         <input type='text'></input>
//       </label>
//     </form>
//   )
// }
// const MyForm = () => {
//   const [name, setName] = useState("")
//   const handleSubmit= (event) => {
//     event.preventDefault()
//     alert(`The new name provide was ${name}`)
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//           type='text'
//           value={name} 
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type='submit' />
//     </form>
//   )
// }

// const MultipleInputForm = () => {
//   const [inputs, setInputs] = useState({})
//   const handleChange = (event) => {
//     const name = event.target.name
//     const value = event.target.age
//     setInputs(values => ({...values, [name]: value}))
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     alert(inputs)
//   }
//   return(
//     <form>
//       <label>Enter your name:
//         <input
//           type='text'
//           name='username'
//           value={inputs.username || ""} 
//           onChange={handleChange}
//         />
//       </label>
//       <label>Enter your age:
//         <input 
//           type='number'
//           name='age'
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type='submit'/>
//     </form>
//   )
// }

// const TextArea = () => {
//   const [textarea, setTextArea] = useState('text area')
//   const handleChange = (event) => {
//     setTextArea(event.target.value)
//   }
//   return(
//     <form>
//       <textarea value={textarea} onChange={handleChange}/>
//     </form>
//   )
// }
// const Select = () => {
//   const [myCar, setMyCar] = useState('Volvo')
//   const handleChange =(event) => {
//     setMyCar(event.target.value)
//   }
//   return(
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford" >Ford</option>
//         <option value="Volvo" >Volvo</option>
//         <option value="Fiat" >Fiat</option>
//       </select>
//     </form>
//   )
// }
// const Favcolor = () => {
//   const [color, setColor] = useState("red")
//   return(
//     <>
//       <h1>`My favourite color is ${color}`</h1>
//       <button
//         type='button'
//         onClick={setColor('Red')}
//       >Red</button>
//       <button
//         type='button'
//         onClick={setColor('blue')}
//         >blue</button>
//         <button
//         type='button'
//         onClick={setColor('Yellow')}
//       >Yellow</button>
//     </>
//   )
// }
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
