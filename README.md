# Solid Credit
Solid Credit is an advanced tool designed for the precise generation of loan amortization tables. This library encompasses a variety of loan structures, including the French, German, and American systems, in addition to offering options for grace periods.

## Installation
To install the library, run the following command:
```bash
npm i solid-credit
```

## Use
To use the library, you must import the Solid class and create an instance of it, which takes as parameters the loan amount, the interest rate, the loan term, and the installment type.
### Fixed Payment
```javascript
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Preteamo)
const data = Solid.fixedPayment((plazo), (InteresAnual), (Preteamo));
const data2 = Solid.fixedPayment(12, 40, 1000);// return array
```
### Variable Payment
```javascript
import { Solid } from 'solid-credit'
// whith basepoint or warrning pais
const data = Solid.variablePayment((plazo = 12), 15, 1000, let basepoint = 300)// return array
// Normal
const data = Solid.variablePayment((plazo = 12), 15, 1000)// return array
```
### grace period
```javascript
// Grace period
import { Solid } from 'solid-credit'
const data = Solid.gracePeriod((plazo = 12), 15, 1000, 3);// return array

// Grace period with fixed payment
import { Solid } from 'solid-credit'
const data = Solid.graceFixedPayment((plazo = 12), 15, 1000, 3) // return Promise<array>
```
### American method
```javascript
import { Solid } from 'solid-credit'
const data = Solid.americanMethod((plazo = 12), 15, 1000)// return array
```
### Structure of Array
```javascript
// Structure of array
[
    {
        month: 1,
        payment: 0,
        interest: 0,
        Principal: 0,
        balance: 0
    }
]
```

## Example
```javascript
from {solid_crt} import SolidCrt

const data = SolidCrt.fixedPayment(plazo = 12, 15, 1000);

const tbody = document.querySelector('#paymentsTable tbody');

const rows = data.map(item => {
    return `<tr>
            <td>${item.month}</td>
            <td>${item.payment.toFixed(2)}</td>
            <td>${item.interest.toFixed(2)}</td>
            <td>${item.principal.toFixed(2)}</td>
            <td>${item.balance.toFixed(2)}</td>
        </tr>´
}).join('');
tbody.innerHTML = rows;

```
## Contribution
Contributions are welcome; to do so, you must create a pull request with the new feature or bug fix

## Licence
Licence
[MIT](https://choosealicense.com/licenses/mit/)
