import {useEffect, useState} from 'react'
import { signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import todo from '../assets/todo.webp'

const Welcome = () => {
   const navigate=useNavigate();
   const [registerInfo,setRegisterInfo]=useState({
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword :''
})
   const [isRegistering,setIsRegistering]=useState(false)
useEffect(()=>{

   auth.onAuthStateChanged((user)=>{
    if(user){
        navigate("/homepage")
    }
   })

},[])



    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

   const handleEmail=(e)=>{
     setEmail(e.target.value)
   }
   const handlePassword=(e)=>{
    setPassword(e.target.value)
   }

   const handleSignIn=()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        navigate("/homepage")
    }).catch((err)=>alert(err.message))
   }

const handleRegister=()=>{
if(registerInfo.email!==registerInfo.confirmEmail){
   alert("Please Confirm that email are the same")
   return
}
else if(registerInfo.password !==registerInfo.confirmPassword ){
   alert("Please confirm that password are same")
   return
}

createUserWithEmailAndPassword(auth,registerInfo.email,registerInfo.password).then(()=>{
   navigate("/homepage")
})
}


  return (
     <div className="welcome">
      <img src={todo} className='todo-svg'/>
        <h1>Task Tracker</h1>
        <div className='login-register-container'>
    {
      isRegistering ?
      <>
       
<input type="email" placeholder='Email' value={registerInfo.email} onChange={(e)=>setRegisterInfo({
   ...registerInfo,
   email:e.target.value
})} />
<input type="email" placeholder='confirm email' value={registerInfo.confirmEmail} onChange={(e)=>setRegisterInfo({
   ...registerInfo,
   confirmEmail:e.target.value
})} />
<input type="password" placeholder='password' value={registerInfo.password} onChange={(e)=>setRegisterInfo({
   ...registerInfo,
   password:e.target.value
})}/>
<input type="password" placeholder='confirm password' value={registerInfo.confirmPassword} onChange={(e)=>setRegisterInfo({
   ...registerInfo,
   confirmPassword:e.target.value
})} />

     <button className='sign-in-register-btn' onClick={handleRegister}>Register</button>
     <button onClick={()=>setIsRegistering(false)}>Go Back</button>
      </>:<> <input type='email' placeholder='Email...' onChange={handleEmail} value={email} />
      <input type='password'onChange={handlePassword} value={password} placeholder='Password' />
      <button className='sign-in-register-btn' onClick={handleSignIn}> Sign In</button>
      <button className='create-account-btn' onClick={()=>setIsRegistering(true)}>Create an account</button></>

    }

        </div>
     </div>
  )
}

export default Welcome