const hotelForm = document.getElementById("hotelForm");
const hotelList = document.getElementById("hotelList");

let hotels = [];
let isEditing = false; 
let currentHotelIndex = null; 
hotelForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const hotelName = document.getElementById("hotelName").value;
    const roomsAvailable = document.getElementById("roomsAvailable").value;
    const location = document.getElementById("location").value;

    if (isEditing) {
    
        hotels[currentHotelIndex] = { name: hotelName, rooms: roomsAvailable, location: location };
        isEditing = false;
        currentHotelIndex = null;
    } else {
        
        const hotel = { name: hotelName, rooms: roomsAvailable, location: location };
        hotels.push(hotel);
    }

    renderHotelList();
    hotelForm.reset();
});

function renderHotelList() {
    hotelList.innerHTML = ""; 
    hotels.forEach((hotel, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${hotel.name}</strong><br>
                Rooms: ${hotel.rooms} | Location: ${hotel.location}
            </div>
            <div>
                <button class="edit" onclick="editHotel(${index})">Edit</button>
                <button class="delete" onclick="deleteHotel(${index})">Delete</button>
            </div>
        `;
        hotelList.appendChild(li);
    });
}

function editHotel(index) {
    const hotel = hotels[index];

    document.getElementById("hotelName").value = hotel.name;
    document.getElementById("roomsAvailable").value = hotel.rooms;
    document.getElementById("location").value = hotel.location;

    isEditing = true; 
    currentHotelIndex = index; 
}

function deleteHotel(index) {
    hotels.splice(index, 1); 
    renderHotelList(); 
}
