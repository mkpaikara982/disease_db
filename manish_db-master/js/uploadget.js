let get_all_disease=()=>{
    return axios.get('http://localhost:3000/disease').then((res)=>{
        console.log(res.data)
        return res.data
    })
}

document.querySelector('#dis_b') && document.querySelector('#dis_b').addEventListener('click',(e)=>{
    get_all_disease().then((doc) => {
        
        user.forEach((val, ind) => {
            if (val.status === "true") {
                let new_div = document.getElementById('display_dis');

                new_div.innerHTML+=`<div style="border: solid 5px; box-shadow: 6px 6px 0px rgb(22, 27, 105); border-radius: 5px; width: 30%; margin-left: 35%;margin-bottom: 1% ; padding-right:3%; padding-left:6%; padding-top:1%; padding-bottom:1%; ">
                                        <h5>Name: ${val.diseasename}</h5>
                                        <h6>ID: ${val.did}</h6>
                                        <h6>Symptoms : ${val.symptoms}</h6>
                                        <h6>Medicine: ${val.medicine}</h6>
                                        <h6>Prevention: ${val.prevention}</h6>
                                        <h6>Referance: ${val.ref}</h6>
                                    </div>`
                
            }
        })
    })
})