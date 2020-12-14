import React from 'react'
import { Button } from './Button'
import './MainSection.css'
import video from '../Assets/office.mp4'
import Navbar from './Navbar'
import Cards from './Cards'

function MainSection(){

    return(
        
            <div>
< Navbar/>
<div className='main-container'>
            
            
            <video src={video} autoPlay loop muted/>
            
            <h1>Get Hired</h1>
            <p>What are you waiting for?</p>
            <div className='main-btns'> 
                <Button
                location='/candidate'
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                   Looking for a Job
                </Button>
                <Button
                location='/recruiter'
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Hire Candidates
                </Button>
            </div>
        </div>
        <Cards/>
            </div>

        

    )
}



export default MainSection;