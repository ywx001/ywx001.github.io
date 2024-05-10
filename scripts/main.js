let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/color-man.png") {
    myImage.setAttribute("src", "images/flower.png");
  } else {
    myImage.setAttribute("src", "images/color-man.png");
  }
};