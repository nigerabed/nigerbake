let myorderDetail = JSON.parse(localStorage.getItem("orderDetail"));
console.log(myorderDetail);

let orderDetailView = document.getElementById("orderDetailView");

orderDetailView.innerHTML = `
    
    <p>
    <span>Size</span> ${myorderDetail.size} Persons
    </p>
    <p>
    <span>Flavour</span> ${myorderDetail.flavour}
    </p>
    
    
    `;

let contactDetailView = document.getElementById("contactDetailView");
contactDetailView.innerHTML = `
    <p>
    <span>Full Name</span> ${myorderDetail.fullName} 
    </p>
    <p>
    <span>Address</span> ${myorderDetail.address} 
    </p>
    <p>
    <span>Phone</span> ${myorderDetail.phoneNumber} 
    </p>
    <p>
     <span>Email</span> ${myorderDetail.email} 
    </p>
    `;
