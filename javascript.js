const colorSwitch = document.getElementById("input-color-switch");
colorSwitch.addEventListener("click", checkMode);

function checkMode() {
  console.log("checking");
  if (colorSwitch.checked) {
    console.log("on");
    darkMode();
  } else {
    console.log("off");
    whiteMOde();
  }
}
function darkMode(){
    document.body.classList.add("dark-mode")
}
function whiteMOde(){
    document.body.classList.remove('dark-mode')
}
