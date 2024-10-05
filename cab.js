let button = document.getElementById("button");
button.onclick = function(event){
    event.preventDefault();
                
    let name = document.getElementById("namei").value;
    let no = document.getElementById("noi").value;
    let ploc = document.getElementById("ploci").value;
    let dloc = document.getElementById("dloci").value;
    let otp = document.getElementById("otpi").value;
                
    if(otp !== "5656"){
        alert("Invalid OTP. Please try Again");
        return;
    }
                
    let taxi = [
        {name : "Vijay", num : "TN-64-CM-2026", no : "+91 9876543210"},
        {name : "Alex", num : "TN-64-VJ-2026", no : "+91 9876543210"},
        {name : "John", num : "TN-64-VJ-2027", no : "+91 9876543210"},
        {name : "Siva", num : "TN-64-VJ-2028", no : "+91 9876543210"},
        {name : "Mani", num : "TN-64-VJ-2029", no : "+91 9876543210"},
        {name : "Logesh", num : "TN-64-VJ-2030", no : "+91 9876543210"},
        {name : "Jagadheesh", num : "TN-64-VJ-2031", no : "+91 9876543210"},
        {name : "Badhri", num : "TN-64-VJ-2032", no : "+91 9876543210"},
        {name : "Mukhil", num : "TN-64-VJ-2033", no : "+91 9876543210"},
        {name : "Kishore", num : "TN-64-VJ-2034", no : "+91 9876543210"}
    ];
                
    let km = [
        {ploc : "Madurai", dloc : "Chennai", km : "456.0" },
        {ploc : "Madurai", dloc : "Bangalore", km : "419.7" },
        {ploc : "Chennai", dloc : "Madurai", km : "456.0" },
        {ploc : "Chennai", dloc : "Bangalore", km : "347.0" }                   
    ];
                
    let distance = km.find(route => route.ploc === ploc && route.dloc === dloc);
    if(!distance){
        alert("Distance not available for selected Location");
        return;
    }
                
    let driver = taxi[Math.floor(Math.random() * taxi.length)];
    let tot = (distance.km * 3).toFixed(2);
                
    let Details = `\n\
    Booking Details :\n\
    Name : ${name}\n\
    Contact Number : ${no}\n\
    PickUp Location : ${ploc}\n\
    Drop Location : ${dloc}\n\
    Distance : ${distance.km} km\n\
    Driver Name : ${driver.name}\n\
    Car Number : ${driver.num}\n\
    Driver's Contact Number : ${driver.no}\n\
    Total Fare : Rs ${tot}
    `;
    
    alert(Details);                
};
