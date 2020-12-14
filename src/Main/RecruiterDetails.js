import React,{useState} from 'react'
import { Modal,Navbar,Button,Form,Nav,FormControl, Card, CardDeck } from 'react-bootstrap'
import './Details.css'
import './Cards.css'
import { useHistory } from "react-router-dom";

const RecruiterDetails=()=>{
	let history = useHistory()

    
const [data,setData] = useState(jobData)
const [show,showModal]= useState(false)
const [role,setRole]= useState('')
const [exp,setExp]= useState('')
const [loc,setLoc]= useState('')
const [salary,setSalary]= useState('')
const logout=()=>{
    // fire.auth().signOut().then(()=>{
        history.push('/')
    // })
}
const addJob=(role,exp,loc,salary)=>{
    data.push({role,exp,loc,salary})
    showModal(false);
}
const deleteJob=(job)=>{
    setData(data.filter(item=> item!=job))
}

return(
    <div className='App' >
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand ><h1  style={{left:0}}>Job Overflow</h1></Navbar.Brand>
    <button onClick={()=>logout()} style={{color:'white',borderRadius:0,backgroundColor:'black',marginBottom:25}}>Log out</button>
  </Navbar>
  <div className='row' style={{justifyContent:'flex-start'}}>
  <h3 style={{textAlign:'start',marginLeft:30,padding:20}}>Jobs Posted by you</h3>
  <a href='#' style={{fontSize:20}} onClick={()=>showModal(true)}  className='btn btn-outline-dark'>Add a job</a>

  </div>
  
{show?<Modal show={show}>

  <Modal.Body>
  <input  onChange={(txt)=>setRole(txt.target.value)}  type="text" placeholder="Job Role" />
  <input onChange={(txt)=>setExp(txt.target.value)} type="text" placeholder="Experience in years" />
  <input  onChange={(txt)=>setLoc(txt.target.value)}  type="text" placeholder="Job Location" />
  <input  onChange={(txt)=>setSalary(txt.target.value)}  type="text" placeholder="Salary Expectation" />
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={()=>showModal(false)} variant="secondary">Close</Button>
    <Button onClick={()=>addJob(role,exp,loc,salary)} variant="dark">Add</Button>
  </Modal.Footer>
</Modal>: <></ >}
  <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
          
              {data.map((job)=>{
                  return(
                    <div className='col-md-3'>
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
                        <ui style={{fontSize:15,textAlign:'start'}}>
                            <li><b>Experience: </b>{job.exp}</li>
                            <li><b>Location: </b>{job.loc}</li>
                            <li><b>Salary: </b>{job.salary}</li>
                        </ui>
                        </div>
                        
                        
                        <a href='#' onClick={()=>deleteJob(job)} className='btn btn-outline-success'>Delete</a>
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


export default RecruiterDetails;