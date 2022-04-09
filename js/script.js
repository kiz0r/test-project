
//    declaring variables
let mobileButton = document.querySelector(".menuButton");
let mobileList = document.querySelector(".menuList");

mobileButton.addEventListener("click", mobileMenu);

//    function to сreate and remove a class by clicking on selector
function mobileMenu() {
	mobileButton.classList.toggle("active");
	mobileList.classList.toggle("active");
}
