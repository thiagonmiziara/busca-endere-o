function buscaCep() {
    let xhr = new XMLHttpRequest();

    let input = document.getElementById("input");

    if (input.value === "") {
        alert("Adicione um cep");
        return;
    }

    xhr.open("GET", "https://viacep.com.br/ws/" + input.value + "/json/");

    xhr.addEventListener("load", function() {
        if (this.readyState == 4 && this.status == 200) {
            let endereco = JSON.parse(xhr.responseText);

            inputData(endereco);
        }
    });

    xhr.send();
}

function inputData(endereco) {
    for (var key in endereco) {
        if (endereco[key] == "") {
            continue;
        }

        let li = document.createElement("li");
        let text = document.createTextNode(endereco[key]);

        li.appendChild(text);
        document.getElementById("data").appendChild(li);
    }
}