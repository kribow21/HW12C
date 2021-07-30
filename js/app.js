let logInBtn = document.getElementById('login');

function signUserUp(){
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    axios.request({
        method : "POST",
        url : "https://reqres.in/api/login",
        headers :{
            "Content-Type" : "application/json"
        },
        data : {
            email : userEmail,
            password : userPassword
        }
    }).then(success).catch(failure)
}
function success(response){
    console.log(response);
    Cookies.set("Token", "grantAccess");
    setTimeout(timeOut, 2000);
}
function failure(error){
    console.error(error);
    let head = document.getElementById('failResponse');
    head.innerText="Login is invalid";
    Cookies.set("noToken", "accessDenied")
    setTimeout(timeOut, 2000);
}
logInBtn.addEventListener("click", signUserUp);

function timeOut (){
    document.location.href="home.html";
}

let outBtn = document.getElementById('logout');

function deleteToken(){
Cookies.remove("Token");
Cookies.remove("noToken");
}
outBtn.addEventListener("click", deleteToken);