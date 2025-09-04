"use client";

import { useState } from "react";

const URLForm = ()=>{

    const [url , seturl] = useState("");
    const [validity, setvalidity] = useState(30);
    const [shortcode , setshortcode] = useState("");
    const [responst, setresponse] = useState("");

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        fetch('./shorturls', {method:"POST",body:JSON.stringify({"url":url, "validity":validity, "shortcode":shortcode})})
        .then(data => data.json())
        .then(res =>{
            setresponse(res)
        })
    }
    return ( <> <form onSubmit={handleSubmit} className="flex" >
    <label htmlFor="url" >url</label>
    <input type="text" id="url" value={url} onChange={(e)=> seturl(e.target.value)} required/>

    <label htmlFor="validity">validity</label>
    <input type="number" value={validity} onChange={(e)=> setvalidity(Number.parseInt(e.target.value))}  id="validiy"/>

    <label htmlFor="shortcode">short code</label>
    <input type="text" id="short code" value={shortcode} onChange={(e)=> setshortcode(e.target.value)}/>

    <input type="submit" value={'create short url'}/>
  </form>

  <h1>{responst}</h1>
  
  </>)
}
export default URLForm;