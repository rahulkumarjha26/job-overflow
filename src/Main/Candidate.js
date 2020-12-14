import React,{useState,useEffect} from 'react'
import video from '../Assets/office.mp4'
import './Candidate.css'
import { useHistory } from "react-router-dom";
import Navbar from './Navbar'


function Candidate(){
	let history = useHistory()
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [alert,setAlert] = useState('');


	const signIn=(email,password)=>{
		if(email=='candidate123@gmail.com' && password=='candidate123'){
			history.push('/candidate-details')
		}
		else{
			setAlert('Incorrect Email/Password')
		}
		// fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
		// 	history.push('/candidate-details')
		// })
		

	}
	const signUp=(email,password)=>{
		// fire.auth().createUserWithEmailAndPassword(email,password).then(()=>{
			history.push('/candidate-details')
		// })
	}
	
    useEffect(()=>{
		
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    },[])
    
    return(
        <div >
		
			
			<div>
			
				<Navbar/>
				 <video src={video} autoPlay loop muted/>
<div class="container" id="container">
            <div class="form-container sign-up-container">
		<form>
			<h1>Register</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button onClick={()=>signUp(email,password)}>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign In</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
			<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
			<label style={{color:'dodgerblue'}}>{alert}</label>
			<a href="#">Forgot your password?</a>
			<button onClick={()=>signIn(email,password)}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Let's get you a job!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Welcome Candidate</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>

            
	
</div>
				</div>
			
			
				
			
           
        </div>
        
    )
}



export default Candidate