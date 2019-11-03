axios.get('http://localhost:3000/disease').then((res)=>{
    res.data.forEach((val,ind)=>{
        document.getElementById("showDiseases").innerHTML+=`<div>
            <p>Name: ${val.diseasename}</p>
            <p>Symptoms: ${val.symptoms}</p>
            <p>Medicine: ${val.medicine}</p>
            <p>Prevention: ${val.prevention}</p>
            <p>Name: ${val.diseasename}</p>
        </div>`
    })
})