
const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs"
 
const LOG =(stack:String, level:String, pack:String, message:String)=>{
    try{
        fetch(LOG_API_URL, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYW1hbmFpZHUyMDA0QGdtYWlsLmNvbSIsImV4cCI6MTc1Njk2MzQ1MSwiaWF0IjoxNzU2OTYyNTUxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjEzNTdhM2MtZjZkZi00Mzk3LWJlNTEtOWE2Yjg5ODhmODFiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYW5hbmQgcGFzdXB1bGV0aSIsInN1YiI6IjMzMmM4ZDc1LWJjYWItNDBmZC1hNjg0LTcwNjA0YjlkMDY0NyJ9LCJlbWFpbCI6InJhbWFuYWlkdTIwMDRAZ21haWwuY29tIiwibmFtZSI6ImFuYW5kIHBhc3VwdWxldGkiLCJyb2xsTm8iOiIyMmZlMWE2MTI5IiwiYWNjZXNzQ29kZSI6Ill6dUplVSIsImNsaWVudElEIjoiMzMyYzhkNzUtYmNhYi00MGZkLWE2ODQtNzA2MDRiOWQwNjQ3IiwiY2xpZW50U2VjcmV0IjoiZVZVTXFqampSYnV2c3BtTSJ9.Cpy__VJFZ9nt33fGbihNSwqjbDMfNhS8ieJNj33oD6c'
            }
        })
        .then(data => data.json())
        .then(result => console.log(result))
    }catch(err){
        console.log("error uploading log")
    }
}

export default LOG;