let display = document.getElementById("display");

let button = Array.from(document.querySelectorAll("button"));

button.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;

      case "DEL":
        if (display.innerText === "Digite um número") {
          display.innerText = "";
        } else if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        if (display.innerText === "") {
          display.innerText = "Digite um número";
        } else {
          display.innerText = eval(display.innerText);
        }
        break;

      default:
        if (display.innerText === "Digite um número") {
          display.innerText = "" + e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
