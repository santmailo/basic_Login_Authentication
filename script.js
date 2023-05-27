const form = document.getElementById("signupForm");

{
    const key = 'userState'; // Unique key used during signup
    const userStateString = localStorage.getItem(key);
    if (userStateString) {
        // Access token exists, redirect to the profile page
        window.location.href = 'profile.html';
    }
}

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cPassword = document.getElementById("cPassword").value;
        const accessToken = generateAccessToken(16);
        const msg = document.getElementById("msg");
        msg.innerText = "Error : All the fields are mandatory";
        msg.style.color = "red";
        if (name && email && password && cPassword && password == cPassword) {
            msg.innerText = "Successfully Signed Up!";
            msg.style.color = "green";

            setTimeout(() => {
                msg.innerText = "Redirecting to profile section wait.... for some seconds ....";
                msg.style.color = "green";
            }, 1000);
            setTimeout(() => {
                window.location.href = "profile.html";
            }, 3000);

        } else {
            document.getElementById("message").appendChild(msg);
            return;
        }
        document.getElementById("message").appendChild(msg);
        let userState = {
            name: name,
            email: email,
            password: password,
            accessToken: accessToken
        }

        localStorage.setItem("userState", JSON.stringify(userState));


    })

    function generateAccessToken(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }

        return token;
    }

