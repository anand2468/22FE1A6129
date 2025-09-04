import { findUrl , allurls} from "@/urlhandler/urls";
import { json } from "stream/consumers";


async function Urlpage({params}:{params: Promise<{url:string}>}){
    const awaitparm = await params
    const url = awaitparm.url
    const originalUrl = findUrl(url)
    console.log(originalUrl+ JSON.stringify(allurls))
    if (originalUrl.length == 0){
        return <h1> url not found</h1>
    }
    else if (originalUrl[0].expiry < new Date()){
        return <h1> url expired</h1>
    }
    else{
        <h1>click here to  go to <a href={originalUrl[0].url}>original url </a></h1>
    }
    return <h1> {url} </h1>
}

export default Urlpage;