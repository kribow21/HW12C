let logInBtn = document.getElementById('login');

function signUserUp(){
    axios.request({
        method : "POST",
        url : "https://reqres.in/api/login",
        headers :{
            "Content-Type" : "application/json"
        },
        data : {
            email : "emma.wong@reqres.in",
            password : "password"
        }
    }).then(success).catch(failure)
}
function success(response){
    console.log(response);
    document.location.href="home.html";
    Cookies.set("Token", "grantAccess");
    // let x = Cookies.set("response.data.token", "grantAccess")
    // console.log(x);
}
function failure(error){
    console.error(error);
    let head = document.getElementById('failResponse');
    head.innerText="Login is invalid";
    Cookies.set("noToken", "accessDenied")
}
logInBtn.addEventListener("click", signUserUp);