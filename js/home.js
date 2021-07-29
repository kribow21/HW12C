var loginCookie = Cookies.get('Token');
console.log(loginCookie);
var failCookie = Cookies.get('noToken');
console.log(failCookie);

if (loginCookie == "grantAccess"){
    console.log("Welcome User");
    function loggedIn(){
    axios.request({
        method : "GET",
        url : "https://reqres.in/api/unknown"
    }).then(getColor).catch(notValid)
    }
    window.addEventListener("load", loggedIn);

}
else{
    console.log("You are not logged in");
    let newElement = document.createElement('h2');
    newElement.innerText="You failed to login please return to login page";
    let parentElement = document.getElementById('ifFail')
    parentElement.appendChild(newElement);
    let newBtn = document.createElement('button');
    newBtn.innerText="Return to Login Page";
    newBtn.setAttribute('href', "index.html")
    parentElement.appendChild(newBtn);
}
function getColor(response){
    console.log(response);


}
function notValid(error){
    console.error(error);
}

