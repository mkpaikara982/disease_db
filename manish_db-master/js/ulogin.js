let get_all_users=()=>{
    return axios.get('https://still-inlet-89790.herokuapp.com/users').then((res)=>{
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
                flag = 1
                
                // let user_name =val.first_Name +' '+ val.last_Name 
                // let user_pnum = val.pnumber

                // localStorage.setItem('unite_name',user_name)
                // localStorage.setItem('unite_pnum',user_pnum)

                window.location.href = "xxx.html"; // ander k page ka link 
            }
        })
    })
})