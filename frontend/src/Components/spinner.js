import React,{useState,useEffect} from 'react'
import { useNavigate , useLocation } from 'react-router-dom'

const Spinner = ({path="login"}) => {
    const [count,setcount]=useState(5)
    const navigate = useNavigate()
    const Location = useLocation()
    useEffect(()=>{
        const interval = setInterval(()=>{
            setcount((prevalue)=>--prevalue);
        },1000);
       if(count ===0)
       {
        navigate(`/${path}`,{
          state:Location.pathname,
        });
       }
       return ()=>clearInterval(interval)
       
    },[count,navigate,Location])
  return (
    <>
         <div className="d-flex flex-column justify-content-center align-items-center"style={{height:"100vh"}}>
         <h1 className='Text-center'>redirecting to you in {count} second</h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    </>
  )
}

export default Spinner