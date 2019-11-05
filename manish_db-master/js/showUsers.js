axios.get('http://localhost:3000/users').then((res)=>{
    res.data.forEach((val,ind)=>{
            document.getElementById("a_user").innerHTML+=`<div>
            <p>Username: ${val.username}</p>
            <p>Education: ${val.education}</p>
            <p>Age: ${val.age}</p>
            <p>University: ${val.university}</p>

            <br><br><br>
        </div>`
    })
})