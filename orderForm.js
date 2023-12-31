let ordDetail = {
  fullName: "",
  address: "",
  phoneNumber: "",
  size: "",
  flavour: "",
  deliveryDate: "",
  email: ""
};

let success;
let form = document.getElementById("form");

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  success = true;

  let arryData = Array.from(event.target);


  // check validation
  arryData.forEach(validate);

  // before submit save to local storage;

  localStorage.setItem("orderDetail", JSON.stringify(ordDetail));

  if (success == true) {
    form.submit();
  }

 
}

/**
 * Validates an input field HTML element depending on type, and displays validation text on next sibling
 * @param {HTMLElement} field 
 */
function validate(field) {
  console.log(field);
  // jodi input or select hoy tahole sudu validation korbe
  // jodi onno kichu hoy tahole if er modde dikbe na and validation korte hobe na
  // tai
  if (field.nodeName === "INPUT" || field.nodeName == "SELECT") {
   
    field.nextElementSibling.textContent = "";

    if (field.required && !field.value) {
      field.nextElementSibling.textContent = "can not be empty!";
      success = false;
    }

    if (field.name === "name") {
      if (!field.value) {
        field.nextElementSibling.textContent = "write your name!";
        success = false;
      }else{
        ordDetail.fullName = field.value
      }
    }
    if (field.name === "address") {
      if (!field.value) {
        field.nextElementSibling.textContent = "write your address!";
        success = false;
      }else{
        ordDetail.address = field.value
      }
    }
  }

   if (field.type === "email") {
     const indexOfAt = field.value.indexOf("@");
     const indexOfDot = field.value.indexOf(".");
     if (
       indexOfAt === -1 ||
       indexOfAt === 0 ||
       indexOfAt === field.value.length - 1 ||
       indexOfDot === -1 ||
       indexOfDot === 0 ||
       indexOfDot === field.value.length - 1 ||
       indexOfDot < indexOfAt ||
       indexOfAt === indexOfDot - 1
     ) {
       field.nextElementSibling.textContent =
         "write correct email address!";
       success = false;
     }else{
        ordDetail.email = field.value;
     }
   }

  if (field.name === "phone") {
    if (
      isNaN(field.value) ||
      field.value.length > field.maxlength ||
      field.value.length < field.minlength
    ) {
      field.nextElementSibling.textContent =
        "write correct phone number!";
      success = false;
    }else{
      ordDetail.phoneNumber = field.value;
    }
  }

  if (field.name === "personQuantity") {
    if (!field.value) {
      field.nextElementSibling.textContent =
        "enter your quantity, how many persons cake!";
      success = false;
    } else if (field.value < 10) {
      field.nextElementSibling.textContent = "minimum size 10 person!";
      success = false;
    } else if (field.value > 50) {
      field.nextElementSibling.textContent = "maximum size 50 person!";
      success = false;
    } else {
      ordDetail.size = field.value;
    }
  }
  if (field.name === "flavour") {
    if (field.value === "") {
      field.nextElementSibling.textContent = "choose a flavor!";
      success = false;
    }else {
     
      ordDetail.flavour = field.value;
    
    }



  }
}
