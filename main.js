let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");


const register = () => {

    //Hämta values från input-fält
    let username = usernameInput.value;
    let password = passwordInput.value;

    console.log(username,password); 

    let newUser = {
        username,
        password
    }

    //Hämta nuvarande användare + Lägg till ny användare 
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
}


const login = () => {
        //Hämta values från input-fält
        let username = usernameInput.value;
        let password = passwordInput.value;

        //Kolla igenom local storage om något objekt matchar dessa värden.
        let users = JSON.parse(localStorage.getItem("users"));

        let currentUser = users.find(user => user.username === username && user.password === password)

        if(currentUser){
            //Uppdatera sessionstorage till inloggat läge.

            sessionStorage.setItem("loggedIn", JSON.stringify(currentUser));

            //Skriv ut meddelande
            let h2 = document.createElement("h2");
            h2.innerText = "Welcome " + currentUser.username + "! :)";
            document.body.append(h2);
        } else {
            let h2 = document.createElement("h2");
            h2.innerText = "No such user exists."
            document.body.append(h2);
        }
}

const logout = () => {
    sessionStorage.removeItem("loggedIn");
}

document.querySelector("#registerBtn").addEventListener("click", register);
document.querySelector("#loginBtn").addEventListener("click", login);
document.querySelector("#logoutBtn").addEventListener("click", logout);



//Vid sidladdning

if(sessionStorage.getItem("loggedIn")){
    let user = JSON.parse(sessionStorage.getItem("loggedIn"));
    //Skriv ut en hälsning
    let h2 = document.createElement("h2");
    h2.innerText = "Welcome " + user.username + "! :)";
    document.body.append(h2);

    //Show log out button

    document.querySelector("#loginBtn").classList.add("hidden");
    document.querySelector("#logoutBtn").classList.remove("hidden");

} else {
    document.querySelector("#loginBtn").classList.remove("hidden");
    document.querySelector("#logoutBtn").classList.add("hidden");
}

