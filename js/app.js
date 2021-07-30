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
    document.location.href="home.html";
    Cookies.set("Token", "grantAccess");
}
function failure(error){
    console.error(error);
    let head = document.getElementById('failResponse');
    head.innerText="Login is invalid";
    Cookies.set("noToken", "accessDenied")
    document.location.href="home.html";
}
logInBtn.addEventListener("click", signUserUp);