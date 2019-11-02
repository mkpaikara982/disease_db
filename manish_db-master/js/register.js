document.querySelector('#reg_b').addEventListener('click',(e)=>{
    let name = document.querySelector('#username').value
    let pass = document.querySelector('#upass').value
    let email = document.querySelector('#email').value
    let edu = document.querySelector('#edu').value
    let age = document.querySelector('#age').value
    let uni = document.querySelector('#uni').value

    let new_user = {username: name, password:pass,age:Number(age),email:email,edu:edu,uni:uni}

    axios.post('https://localhost:3000/users',new_user,{
        headers:{
            'Content-type':'application/json'
        }
    }).then((res)=>{
        console.log(res.data)
        console.log(emaila)
        window.location.href = "login.html"
    })


    }
)