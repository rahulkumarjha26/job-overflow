import React,{useState} from 'react'
import { Modal,Navbar,Button,Form,Nav,FormControl, Card, CardDeck } from 'react-bootstrap'
import './Details.css'
import './Cards.css'
import { useHistory } from "react-router-dom";

const CandidateDetails=()=>{
	let history = useHistory()

    
const [data,setData] = useState(jobData)
const [appliedJobs,showAppliedJobs] = useState(false)
const [role,setRole]= useState('')
const [exp,setExp]= useState('')
const [loc,setLoc]= useState('')
const [salary,setSalary]= useState('')

const logout=()=>{
    // fire.auth().signOut().then(()=>{
        history.push('/')
    // })
}




return(
    <div className='App'>
        
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand ><h1  style={{left:0}}>Job Overflow</h1></Navbar.Brand>
    <button onClick={()=>logout()} style={{color:'white',borderRadius:0,backgroundColor:'black',marginBottom:25}}>Log out</button>
  </Navbar>
  <div className='row' style={{justifyContent:'flex-start',marginLeft:50}}>
  <a href='#' style={{fontSize:20}} onClick={()=>showAppliedJobs(false)} className='btn btn-outline-dark'>Jobs for you</a>

  <a href='#' style={{fontSize:20}} onClick={()=>showAppliedJobs(true)} className='btn btn-outline-dark'>Applied Jobs</a>

  </div>
 
  <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
          
              {(appliedJobs?jobsApplied:data).map((job)=>{
                  return(
                    <div className='col-sm-3'>
<div className='card text-center' style={{marginBottom:20,borderRadius:20,borderColor:'dodgerblue'}}>
                <div className='overflow'>
                </div>
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>
                            {job.role}
                        </h4>
                        <text className='card-text text-secondary'>
                            A lot of random text that tells u about the job. The candidate should be able to have two eyes, two hands and a brain for a start. The candidate should also be able to make tea for everyone at the office.
                        </text>
                        <div style={{marginTop:20}}>
                        <ui style={{textAlign:'start'}}>
                            <li><b>Experience: </b>{job.exp}</li>
                            <li><b>Location: </b>{job.loc}</li>
                            <li><b>Salary: </b>{job.salary}</li>
                        </ui>
                        </div>
                        
                        {appliedJobs?
                        <></>
                        :
                        <a href='#'  onClick={()=>jobsApplied.push(job)} className='btn btn-outline-success'>Apply for this Job</a>
                        }
                        
                        
                    </div>

          </div>
          </div>
                  )
              })}
  
      </div>
    
  </div>


  
  
  
    </div>
)

}


const jobData=[
    {role:'React Developer',exp:'1-2 years',loc:'Delhi',salary:'7 LPA'},
    {role:'Backend Developer',exp:'3-5 years',loc:'Bangalore',salary:'5 LPA'},
    {role:'Business Executive',exp:'2-3 years',loc:'Pune',salary:'5.5 LPA'},
]

var jobsApplied=[
    {role:'Frontend Developer',exp:'2-3 years',loc:'Hyderabas',salary:'12 LPA'},
]


export default CandidateDetails;