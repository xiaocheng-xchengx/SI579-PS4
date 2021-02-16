let darkModeButton = document.getElementsByClassName("darkMode");
let lightModeButton = document.getElementsByClassName("lightMode");
let deleteBtns = document.getElementsByClassName("deleteBtn");
let sections = document.getElementsByTagName("section");
let themeNum = 0;


window.addEventListener('load', (event) => {
  lightModeButton[0].classList.add("colorful");
  themeNum = 1;
});

lightModeButton[0].addEventListener('click', (event) => {
  document.body.removeAttribute("class");
  lightModeButton[0].classList.add("colorful");
  darkModeButton[0].classList.remove("colorful");
  themeNum = 1;
});

darkModeButton[0].addEventListener('click', (event) => {
  document.body.setAttribute("class", "dark");
  document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].style.color = "black";
  darkModeButton[0].classList.add("colorful");
  lightModeButton[0].classList.remove("colorful");
  themeNum = 2;
});

for (let counter = 0; counter < deleteBtns.length; counter++) {
  let temp = counter;
  let section = sections[temp];
  deleteBtns[temp].addEventListener('mouseover', (event) => {
    if (themeNum === 1){
      section.style.backgroundColor = "#ffc2c2";
    }else if (themeNum === 2){
      section.style.backgroundColor = "#780000";
    }
  });
  deleteBtns[temp].addEventListener('mouseleave', (event) => {
    section.style.backgroundColor = "transparent";
  });
  deleteBtns[temp].addEventListener('click', (event) => {
    section.remove();
  });
}
