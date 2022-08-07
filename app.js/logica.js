
function Purchase(data, product, price) {
    this.data = new Date(data);
    this.product = product;
    this.price = Number(price);
}

function reciveFields() {
    let data = document.getElementById("inptData").value
    let product = document.getElementById("inptProduct").value
    let price = document.getElementById("inptPrice").value

    const p = new Purchase(data, product, price);
    if (data == "" || product == "" || price == "") {
        alert(`Um ou mais campos não foram 
        preenchidos`);
    } else {
        registerField(p);
        clearField();
    }
}

function registerField(p) {
    let tr = document.createElement("tr");
    document.getElementById("table").appendChild(tr);
    for (var i in p) {
        var td = document.createElement("td");
        tr.appendChild(td).innerHTML = formatField(p[i]);
    }
}

function clearField() {
    document.getElementById("inptData").value = "";
    document.getElementById("inptProduct").value = "";
    document.getElementById("inptPrice").value = "";
}

function formatField(field) {
    if (typeof field === 'object') {
        const monthTheYears = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho", "Julho", "Agosto",
            "Setembro", "Outubro", "Novembro", "Dezembro"]
        let text = ''
        let day = field.getDay();
        let month = field.getMonth();
        for(i=0;i<monthTheYears.length; i++){
            if(month == i){
                month = monthTheYears[i];
            }
        }
        return text = `Dia: ${day} / ${month}`
    }if(typeof field === 'string'){
        return text = `Compra: ${field}`

    }else{
        return text = `R$: ${field.toFixed(2)}`;
    }
}
