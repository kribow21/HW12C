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
    let newTag = document.createElement('a');
    newTag.setAttribute( "href", "index.html");
    newBtn.append(newTag);
    parentElement.appendChild(newBtn);
}
function getColor(response){
    console.log(response);
    // console.log(response.data.data[1]);
    for (let i =0; i < response.data.data.length; i++){
        let parent= document.getElementById("colorContainer");
        let enterArrays = response.data.data[i];
        console.log(enterArrays);
        let nameOfColor = enterArrays.name;
        console.log(nameOfColor);
        let tag = document.createElement('h3');
        tag.innerText = nameOfColor;
        let birth = document.createElement('p');
        let yearOfcolor = enterArrays.year;
        console.log(yearOfcolor);
        birth.innerText = yearOfcolor;
        let colorID = enterArrays.color;
        console.log(colorID);
        let card = document.createElement('div');
        card.style.backgroundColor=colorID;
        card.appendChild(tag);
        card.appendChild(birth);
        parent.appendChild(card);
    }

}
function notValid(error){
    console.error(error);
}