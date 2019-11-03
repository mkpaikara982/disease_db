let get_all_users=()=>{
    return axios.get('http://localhost:3000/users').then((res)=>{
        console.log(res.data)
        return res.data
    })
}

document.querySelector('#login_b') && document.querySelector('#login_b').addEventListener('click',(e)=>{
    get_all_users().then((doc) => {
        console.log(doc)
        
        let user=doc
        
        user.forEach((val, ind) => {
            let new_div = document.getElementById('a_user');

                new_div.innerHTML+=`<div style="border: solid 5px; box-shadow: 6px 6px 0px rgb(22, 27, 105); border-radius: 5px; width: 30%; margin-left: 35%;margin-bottom: 1% ; padding-right:3%; padding-left:6%; padding-top:1%; padding-bottom:1%; ">
                                        <h5>Name: ${val.username}</h5>
                                        <h6>ID: ${val.education}</h6>
                                        <h6>Symptoms : ${val.age}</h6>
                                        <h6>Medicine: ${val.university}</h6>
                                        
                                    </div>`
        })
    })
})