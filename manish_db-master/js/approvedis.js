render=()=>{
    document.getElementById("showDiseases").innerHTML=''
    axios.get('http://localhost:3000/disease').then((res)=>{
    res.data.forEach((val,ind)=>{
        if(val.status=="false"){
            document.getElementById("showDiseases").innerHTML+=`<div>
            <p>Name: ${val.diseasename}</p>
            <p>Symptoms: ${val.symptoms}</p>
            <p>Medicine: ${val.medicine}</p>
            <p>Prevention: ${val.prevention}</p>
            <p>Reference: ${val.reference}</p>

            <button onclick="approve(${val.did})">Approve</button>
            <button onclick="reject(${val.did})">Reject</button>
            <button onclick="del(${val.did})">Delete</button>
            <button onclick="modify(${val})">Modify</button>

            <br><br><br>
        </div>`
        }
    })
})
}

render()

approve=(did)=>{
    console.log("approved")
    axios.post('http://localhost:3000/changeDiseaseStatus',{did,status:"approved"}).then((res)=>{
        console.log(res)
        render()
    })
}

reject=(did)=>{
    console.log("rejected")
    console.log("approved")
    axios.post('http://localhost:3000/changeDiseaseStatus',{did,status:"rejected"}).then((res)=>{
        console.log(res)
        render()
    })
}

del=(did)=>{
    console.log("approved")
    axios.post('http://localhost:3000/deleteDisease',{did}).then((res)=>{
        console.log(res)
        render()
    })
}