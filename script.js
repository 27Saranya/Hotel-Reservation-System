document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "customer.html";
    }
});

// Admin: Add hotels
const hotelForm = document.getElementById("hotelForm");
const hotelList = document.getElementById("hotelList");
let hotels = [];

if (hotelForm) {
    hotelForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const hotelName = document.getElementById("hotelName").value;
        const roomsAvailable = document.getElementById("roomsAvailable").value;
        const hotel = { name: hotelName, rooms: roomsAvailable };
        
        hotels.push(hotel);
        renderHotelList();
        hotelForm.reset();
    });
}

function renderHotelList() {
    hotelList.innerHTML = "";
    hotels.forEach(hotel => {
        const li = document.createElement("li");
        li.innerHTML = `Hotel: ${hotel.name} | Rooms Available: ${hotel.rooms}`;
        hotelList.appendChild(li);
    });
}

// Customer: Display hotels
const customerHotelList = document.getElementById("customerHotelList");

if (customerHotelList) {
    renderCustomerHotels();
}

function renderCustomerHotels() {
    customerHotelList.innerHTML = "";
    hotels.forEach(hotel => {
        const li = document.createElement("li");
        li.innerHTML = `Hotel: ${hotel.name} | Rooms Available: ${hotel.rooms}`;
        customerHotelList.appendChild(li);
    });
}