let form = document.getElementById("form");
form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let arryData = Array.from(event.target);
  console.log(arryData);
  arryData.forEach(validate);
}

function validate(field) {
  // jodi input or select hoy tahole sudu validation korbe
  // jodi onno kichu hoy tahole if er modde dikbe na and validation korte hobe na
  // tai
  if (field.nodeName == "INPUT" || field.nodeName == "SELECT") {
    console.log(field);
    field.nextElementSibling.textContent = "";

    if (field.required && !field.value) {
      field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
    }

    if (field.name === "name") {
      if (!field.value) {
        field.nextElementSibling.textContent = "write your name!";
      }
    }
    if (field.name === "address") {
      if (!field.value) {
        field.nextElementSibling.textContent = "write your address!";
      }
    }
  }

  if (field.name === "phone") {
    if (
      isNaN(field.value) ||
      field.value.length > field.maxlength ||
      field.value.length < field.minlength
    ) {
      field.nextElementSibling.textContent =
        "Du skal skrive en korrekt telephone number din nar!";
    }
  }

  if (field.name === "personQuantity") {
    if (!field.value) {
      field.nextElementSibling.textContent =
        "enter your quantity, how many persons cake!";
    } else if (field.value < 10) {
      field.nextElementSibling.textContent = "minimum size 10 person!";
    } else if (field.value > 50) {
      field.nextElementSibling.textContent = "maximum size 50 person!";
    }
  }
  if (field.name === "flavour") {
  
    if (field.value ==="") {
      field.nextElementSibling.textContent = "choose a flavor!";
    }
  }
}
