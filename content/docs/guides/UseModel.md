---
title: "Use Model"
description: "This is an example of a guide."
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

To use the library, you must import the Solid class and create an instance of it, which takes as parameters the loan amount, the interest rate, the loan term, and the installment type.


### Fixed Payment
fixed payment is a method that allows you to calculate the amortization table of a loan with a fixed payment. The method takes three parameters: the loan term, the annual interest rate, and the loan amount. The method returns an array of objects, each of which represents a month of the loan. The object contains the following properties:
```javascript
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Prestamo)
const data2 = Solid.fixedPayment(12, 40, 1000);// return array
```
### Variable Payment
Variable payment is a method that allows you to calculate the amortization table of a loan with a variable payment. The method takes three parameters: the loan term, the annual interest rate, and the loan amount. The method returns an array of objects, each of which represents a month of the loan. The object contains the following properties:
```javascript
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Prestamo)
// whith basepoint or warrning pais
const data = Solid.variablePayment( 12, 15, 1000, let basepoint = 300)// return array
// Normal
// structure : (plazo, InteresAnual, Prestamo)
const data = Solid.variablePayment(12, 15, 1000)// return array
```
### grace period
Grace period is a method that allows you to calculate the amortization table of a loan with a grace period. The method takes four parameters: the loan term, the annual interest rate, the loan amount, and the grace period. The method returns an array of objects, each of which represents a month of the loan. The object contains the following properties:
```javascript
// Grace period
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Prestamo)
const data = Solid.gracePeriod(12, 15, 1000, 3);// return array

// Grace period with fixed payment
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Prestamo)
const data = Solid.graceFixedPayment( 12, 15, 1000, 3) // return Promise<array>
```
### American method
American method is a method that allows you to calculate the amortization table of a loan with the American method. The method takes three parameters: the loan term, the annual interest rate, and the loan amount. The method returns an array of objects, each of which represents a month of the loan. The object contains the following properties:
```javascript
import { Solid } from 'solid-credit'
// structure : (plazo, InteresAnual, Prestamo)
const data = Solid.americanMethod(12, 15, 1000)// return array
```
