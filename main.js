function adicionarCard() {

    const titulo = document.getElementById('tituloInput').value;
    if (titulo === '') {

        return;
    }


    const cardContainer = document.getElementById('cardContainer');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-3 mb-3';

    colDiv.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/200/150?random=1" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <button class="btn btn-danger" onclick="apagarCard(this)">Apagar</button>
            </div>
        </div>
    `;


    cardContainer.appendChild(colDiv);


    document.getElementById('tituloInput').value = '';
}


function apagarCard(button) {

    button.closest('.col-md-3').remove();
}

function apagarTodos() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
}
