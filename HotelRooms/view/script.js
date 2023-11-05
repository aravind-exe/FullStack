// Function to fetch and display room data when the page loads

function loadRoomData() {
    fetch('http://127.0.0.1:8080/rooms')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("coming inside")
            const roomData = document.getElementById('roomData'); // Update the target element
            roomData.innerHTML = '';
            data.forEach(room => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${room.room_type}</td>
                <td>${room.room_number}</td>
                <td>${room.capacity}</td>
                <td>${room.bed_configuration}</td>
                <td>${room.view}</td>
                <td>${room.price}</td>
                <td>${room.discount}</td>
                <td>${room.check_in}</td>
                <td>${room.check_out}</td>
                <td>
                <button class="edit-button" onclick="updateRoomData('${room._id}')">Edit</button>
                <button class="delete-button" onclick="deleteRoomData('${room._id}')">Delete</button>
                </td>
                `;
                roomData.appendChild(row);
            });
            // <button class="edit-button" onclick="check('${room._id}, ${room}')">Edit</button>
        })
        .catch(error => {
            console.error('Error fetching room data:', error);
        });

}

// function check(id, data) {
//     console.log("ID:", typeof id);
//     console.log("Data:", JSON.parse(id)); // Parse the JSON string back to an object
// }

// Call the loadRoomData function when the page loads
window.addEventListener('load', loadRoomData);

document.getElementById('roomForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const room = {};

    formData.forEach((value, key) => {
        room[key] = value;
    });

    const roomId = document.getElementById('roomId').value;

    if (roomId) {
        // Update existing room
        console.log("update")
        // updateRoomData(roomId, room);
        saveUpdatedRoomData()
    } else {
        // Add a new room

        addRoomData(room);
    }

    this.reset();
});

function addRoomData(room) {
    fetch('http://127.0.0.1:8080/rooms', {
        method: 'POST',
        body: JSON.stringify(room),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((room) => {
            // Append room data to the table
            loadRoomData();
        });
}

function getDateFormat(date) {
    const inputDate = new Date(date);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');
    const year = inputDate.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}


function updateRoomData(roomId) {
    // Fetch the room data by ID
    console.log("roomId", roomId)
    fetch(`http://127.0.0.1:8080/rooms/${roomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Populate the form with the retrieved room data
            console.log("::specfic data", data)
            let newData = { ...data }
            newData.check_in =getDateFormat(newData.check_in)
            newData.check_out =getDateFormat(newData.check_out)
                populateFormWithRoomData(newData);
        })
        .catch(error => {
            console.error('Error fetching room data for editing:', error);
        });
}

// Function to populate the form with room data for editing
function populateFormWithRoomData(room) {
    const form = document.getElementById('roomForm');
    form.reset();

    for (const key in room) {
        if (form[key]) {
            form[key].value = room[key]; // Populate the form fields
        }
    }

    document.getElementById('roomId').value = room._id;
}

// Function to update room data on the server
function saveUpdatedRoomData() {
    const form = document.getElementById('roomForm');
    const roomId = document.getElementById('roomId').value;

    if (!roomId) {
        console.error('Room ID is missing. Cannot update.');
        return;
    }

    const updatedRoom = {};

    const formData = new FormData(form);
    formData.forEach((value, key) => {
        updatedRoom[key] = value;
    });
    console.log("room", updatedRoom)
    fetch(`http://127.0.0.1:8080/rooms/${roomId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRoom),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success, e.g., update the UI
            loadRoomData(); // Refresh the table
            form.reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error updating room data:', error);
        });
}


function deleteRoomData(roomId) {
    let confirmDelete = window.confirm("Are you sure want to delete ?");
    if (confirmDelete) {
        fetch(`http://127.0.0.1:8080/rooms/${roomId}`, { method: 'DELETE' })
            .then((data) => {
                loadRoomData();
            })
            .catch((error) => {
                console.error("Error in deleting data");
            })
    }
}

function appendRoomToTable(room) {
    const tablebody = document.getElementById('roomData');
    const row = document.createElement('tr');
    row.dataset.id = room._id; // Assuming _id is the unique identifier in your database

    for (const key in room) {
        const cell = document.createElement('td');
        cell.dataset.key = key;
        cell.textContent = room[key];
        row.appendChild(cell);
    }

    const functionsCell = document.createElement('td');

    editButton.innerText = 'Edit';
    deleteButton.innerText = 'Delete';

    editButton.addEventListener('click', function () {
        populateForm(row);
    });

    deleteButton.addEventListener('click', function () {
        const roomId = row.dataset.id;
        deleteRoomData(row, roomId);
    });

    functionsCell.appendChild(editButton);
    functionsCell.appendChild(deleteButton);
    row.appendChild(functionsCell);

    tablebody.appendChild(row);
}

function updateRoomInTable(updatedRoom) {
    const tablebody = document.getElementById('roomData');
    const existingRow = tablebody.querySelector(`tr[data-id="${updatedRoom._id}"]`);
    if (existingRow) {
        for (const key in updatedRoom) {
            const cell = existingRow.querySelector(`[data-key="${key}"]`);
            cell.textContent = updatedRoom[key];
        }
    }
}

function populateForm(row) {
    const form = document.getElementById('roomForm');
    form.reset();
    for (const key in row.children) {
        if (row.children[key].hasAttribute('data-key')) {
            const field = row.children[key].getAttribute('data-key');
            form[field].value = row.children[key].textContent;
        }
    }
    document.getElementById('roomId').value = row.dataset.id;
}

loadRoomData();
