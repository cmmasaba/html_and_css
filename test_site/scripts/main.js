const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cape.png") {
    myImage.setAttribute("src", "images/image2.png");
  } else {
    myImage.setAttribute("src", "images/cape.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my cool site, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my cool site, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  