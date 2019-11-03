let get_all_users=()=>{
    return axios.get('https://localhost:3000/admin').then((res)=>{
        console.log(res.data)
        return res.data
    })
}

document.querySelector('#login_b') && document.querySelector('#login_b').addEventListener('click',(e)=>{
    get_all_users().then((doc) => {
        console.log(doc)
        console.log("bhaiya ji mil gaya",doc)
        let user=doc
        let u = document.querySelector('#emaill').value
        let p = document.querySelector('#passwordl').value
        
        user.forEach((val, ind) => {
            if (val.email === u && val.password === p ) {
                window.location.href = "arrove_dis.html"; // ander k page ka link 
            }
        })
    })
})