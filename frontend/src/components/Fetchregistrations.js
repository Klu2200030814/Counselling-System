import React,{useState} from 'react'
import axios from 'axios'
const Fetchregistrations = () => {
    const [res,setRes] = useState(null)
    if(res == null){
        axios.get('http://localhost:8000/retrive',{})
        .then(respone=>{
            setRes(respone.data)
            console.log(Response.data)
        })
    }
  return (
    <div><h1>Registrations</h1>
    {JSON.stringify(res)}
    </div>
  )
}

export default Fetchregistrations
