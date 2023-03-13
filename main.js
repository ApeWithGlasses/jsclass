const form = document.querySelector('form');

const clientDB = [];
let client;

const saveClient = () => {
    event.preventDefault();

    function Client(name, idCard, date, description) {
        this.name = name;
        this.idCard = idCard;
        this.date = date;
        this.description = description;
    }

    const nameInput = document.querySelector('#name').value;
    const idCardInput = document.querySelector('#idCard').value;
    const dateInput = document.querySelector('#date').value;
    const descriptionInput = document.querySelector('#description').value;

    client = new Client(nameInput, idCardInput, dateInput, descriptionInput);

    clientDB.push(client);

    a.reset();

    showClientDB();
}

const showClientDB = () => {
    const tbody = document.querySelector('#tbody');

    tbody.innerHTML += `<tr>
        <td>${client.name}</td>
        <td>${client.idCard}</td>
        <td>${client.date}</td>
        <td>${client.description}</td>
    </tr>`;

}

form.addEventListener('submit', saveClient);