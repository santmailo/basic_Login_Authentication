{
    const key = 'userState'; // Unique key used during signup
    const userStateString = localStorage.getItem(key);
    if (!userStateString) {
        // Access token is missing, redirect back to the signup page
        window.location.href = 'index.html';
    }
}


const userStateString2 = localStorage.getItem('userState');
const userState = JSON.parse(userStateString2);

const name = userState.name;
const email = userState.email;
const password = userState.password;


document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('password').textContent = password;

const logout = document.getElementById("logout");
logout.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("userState");
    window.location.href = "index.html";
})