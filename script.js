const h2 = document.createElement("h2");
h2.textContent = "Stay hydrated, friends.";
document.querySelector("body").appendChild(h2);


function eventListenerClick () {
    const text = document.getElementById("bye");

    function clickMessage () {
        alert("Come again soon!");
    }

    text.addEventListener('click', clickMessage );
}

eventListenerClick();
