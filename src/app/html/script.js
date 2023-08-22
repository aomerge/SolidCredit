function formatCurrency(inputElem) {
  let rawValue = inputElem.value.replace(/[^0-9.]/g, "");
  let numericValue = parseFloat(rawValue);

  if (!isNaN(numericValue)) {
    let formattedValue = numericValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    inputElem.value = formattedValue;
  }
}

function unformatCurrency(inputElem) {
  inputElem.value = inputElem.value.replace(/[^0-9.]/g, "");
}
function generateTable(  ) {
    const Amortización = document.getElementById("amortizationTable");
    let tableContent = `
        <thead>
            <tr>
                <th>Período</th>
                <th>Cuota</th>
                <th>Interés</th>
                <th>Amortización</th>
                <th>Saldo pendiente</th>
            </tr>
        </thead>
        <tbody>
    `;
    Amortización.innerHTML = tableContent;

}
function generateTable2()
{
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseInt(document.getElementById("month").value);
    const method = document.getElementById("method").value;

    switch (method) {
        case "frances":
            generateTable();
            Solid.fixedPayment();
            break;
    }

}
function Onclickfrom()
{
    const btnLoadFrom = document.getElementById("btn-loadfrom");
    btnLoadFrom.addEventListener("click", generateTable2);
    
}

Onclickfrom();
//generateTable2();
//generateTable();
