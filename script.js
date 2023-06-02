let arr = []
if (!localStorage['info']) {
    localStorage['info'] = JSON.stringify([])
} else {
    arr = JSON.parse(localStorage['info'])
}


let info

function website_register() {
    register.createUser(info = {
        username: prompt('write yor new username'),
        password: prompt('Write yor new passwort')
    })
    arr.push(info)
    localStorage['info'] = JSON.stringify(arr)
    register.aufication()

}


const login = {
    username: '',
    password: '',
    aufication: function () {
        console.log("user logged in successful", this.username)

    }

}


const register = Object.create(login)

register.__proto__.createUser = function (uname, psw) {
    this.username = uname
    this.password = psw


    console.log("User Register", this.username)
}


function login_website() {
    let i = prompt("write username")
    let j = prompt("write password")
    arr.filter(res=>{

        if(res.username===i && res.password===j){
            alert("barehajox mutq")

        }else {
            alert("anhajox")


        }

    })
    return
}






