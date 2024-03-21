---
title: "Generating Amortization Tables"
description: "Reference pages are ideal for outlining how things work in terse and clear terms."
summary: ""
date: 2023-09-07T16:13:18+02:00
lastmod: 2023-09-07T16:13:18+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

this is a calculator of amortization tables, it is a library that allows you to calculate the amortization table of a loan with a fixed payment, variable payment, grace period, and American method. The library encompasses a variety of loan structures, including the French, German, and American systems, in addition to offering options for grace periods.

// generamos un formulario para generar la tabla de amortización
// generamos un formulario para generar la tabla de amortización
<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Amortización</title>
</head>
<body>
    <h2>Calculadora de Amortización</h2>
    <label for="loanAmount">Monto del préstamo:</label>
    <input type="number" id="loanAmount" value="1000"><br><br>
    <label for="interestRate">Tasa de interés anual (%):</label>
    <input type="number" id="interestRate" value="5"><br><br>
    <label for="loanTerm">Plazo del préstamo (años):</label>
    <input type="number" id="loanTerm" value="1"><br><br>
    <button onclick="generateAmortizationTable()">Generar Tabla de Amortización</button>
    <h3>Tabla de Amortización</h3>
    <table id="amortizationTable" border="1">
        <thead>
            <tr>
                <th>Mes</th>
                <th>Saldo Inicial</th>
                <th>Pago</th>
                <th>Principal</th>
                <th>Interés</th>
                <th>Saldo Final</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <script>
        function generateAmortizationTable() {
            var loanAmount = document.getElementById('loanAmount').value;
            var interestRate = document.getElementById('interestRate').value / 100 / 12;
            var loanTerm = document.getElementById('loanTerm').value * 12;
            var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
            var tableBody = document.getElementById('amortizationTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = "";  // Limpiar la tabla antes de generar nuevos datos
            var balance = loanAmount;
            for (var i = 1; i <= loanTerm; i++) {
                var interest = balance * interestRate;
                var principal = monthlyPayment - interest;
                balance -= principal;
                var row = tableBody.insertRow();
                row.insertCell(0).innerHTML = i;
                row.insertCell(1).innerHTML = balance.toFixed(2);
                row.insertCell(2).innerHTML = monthlyPayment.toFixed(2);
                row.insertCell(3).innerHTML = principal.toFixed(2);
                row.insertCell(4).innerHTML = interest.toFixed(2);
                row.insertCell(5).innerHTML = balance.toFixed(2);
            }
        }
    </script>
</body>
</html>



