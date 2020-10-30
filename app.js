const input = document.getElementById("Name");
const button = document.getElementById("post");
const drawArea = document.getElementById("info");
const error = document.getElementById("alert");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  const valueOfInput = capitalizeFirstLetter(input.value);
  const api = `https://elements-api.herokuapp.com/${valueOfInput}`;
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      if (valueOfInput === "") {
        alert("Suply valid name");
        return;
      }
      drawArea.innerHTML = `
        <br>
        <br>
        <p style="font-size: 60px;">Name: ${data.Chemical_Element_Name}</p>
        <p style="font-size: 40px;">Symbol: <span style="color: rgb(4, 154, 255);">${data.Symbol}</span></p>
        <p>Atomic number: <span style="color: darkcyan;">${data.Atomic_Number}</span></p>
        <p>Atomic mass: <span style="color: red;">${data.Atomic_Mass}</span></p>
        `;
    });
});
