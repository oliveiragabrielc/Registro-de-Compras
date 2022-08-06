

function receberValor() {
    const purchase = {
        data: document.getElementById("inptData").value,
        name: document.getElementById("inptName").value,
        price: document.getElementById("inptPrice").value
    }
    var tr = document.createElement("tr");
    document.getElementById("table").appendChild(tr);

    for (var i in purchase) {
        var td = document.createElement("td");
        tr.appendChild(td).innerHTML = compra[i];
    }
    clearField();
}
function clearField() {
    document.getElementById("inptData").value = "";
    document.getElementById("inptName").value = "";
    document.getElementById("inptPreco").value = "";
}


