import { useEffect, useState } from 'react'
import { Alkotás } from './alkotás'
import './App.css'

function App() {
 
  const [alkotáss,setAlkotáss]=useState([] as Alkotás[])
  useEffect(()=>{
    async function load() {
      try
      {
        const response=await fetch("http://localhost:3000/commissions");
        const data= await response.json() as Alkotás[]
        setAlkotáss(data)
        console.log(data)
      }
      catch{

      }
    }
    load()
  }, [])

  return (
    <>
      <table>
        {alkotáss.map((x)=>(
          <tr>
            <td>{x.id}</td>
            <td>{x.leiras}</td>
            <td>{x.price}</td>
          </tr>
        ))}
      </table>
      
    </>
  )
}

export default App
