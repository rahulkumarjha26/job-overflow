import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './Navbar.css'
function Navbar(){

    const [click,setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    const [button,setButton] = useState(true);
    const showButton=()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    },[])

    window.addEventListener('resize',showButton);
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                  <Link  style={{textDecoration:'none',color:'white'}} to='/' className='navbar-logo'>
                     <h1>
                     Job Overflow
                         </h1>
                  </Link> 
                  <div className='menu-icon' onClick={handleClick}>
                   <i className={click?'fas fa-times':'fas fa-bars'} />   
                   </div> 
                   <ul  className={click?'nav-menu active':'nav-menu'}>
                       <li className='nav-item'>
                           <Link style={{textDecoration:'none'}} className="link" to='/recruiter' className='nav-links' onClick={closeMobileMenu}>
                               Recruiter
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link style={{textDecoration:'none'}} className="link" to='/candidate' className='nav-links' onClick={closeMobileMenu}>
                               Candidate
                           </Link>
                       </li>
                       
                       
                   </ul>
                   <div className='btn-login'>
                   {button && <Button location='/candidate' buttonStyle='btn--outline'>Login/Register</Button>}
                   </div>
                       
                       
            </div>
        </nav>
        </>
    )
}

export default Navbar;