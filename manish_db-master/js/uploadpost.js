var mid = 1

document.querySelector('#dis_b').addEventListener('click',(e)=>{
    let dname = document.querySelector('#dname').value
    let symptoms = document.querySelector('#symptoms').value
    let medicine = document.querySelector('#medicine').value
    let prevention = document.querySelector('#prevention').value
    let ref = document.querySelector('#ref').value

    let new_disease = {diseasename: dname, did:wid,symptoms:symptoms,medicine:medicine,prevention:prevention,ref:ref,status: "false"}

    axios.post('https://localhost:3000/disease',new_disease,{
        headers:{
            'Content-type':'application/json'
        }
    }).then((res)=>{
        mid=mid+1
        alert(dname +" Added Successfully!!!")
    })
    }
)

  