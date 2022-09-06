import React,{useEffect, useState} from 'react'
import axios from 'axios'
function App() {
  const[quotes,setQuotes]=useState([])
  useEffect(()=>{
    let data= async()=>{
      let res= await axios.get("https://animechan.vercel.app/api/random")
    // console.log(res);
    setQuotes(res.data)
    }
    data()
  },[])
  let fetchData=async()=>{
    let res=await axios.get("https://animechan.vercel.app/api/random")
    // console.log(res);
    setQuotes(res.data)

  }

  return (
    <>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title"><p className='author'> Author:-{quotes.character}</p></h5>
    <p className="card-text">{quotes.quote}</p>
    <button className="btn btn-primary" onClick={fetchData}>New Quote</button>
  </div>
</div>
    </>
  )
}

export default App