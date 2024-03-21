---
title: "Structure Data"
description: "This is an example of a guide."
summary: ""
date: 2023-09-10T16:04:48+02:00
lastmod: 2023-09-10T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
Solid Credit is an advanced tool designed for the precise generation of loan amortization tables.This library encompasses a variety of loan structures, including the French, German, and American systems, in addition to offering options for grace periods.

the library, you must import the Solid class and create an instance of it, which takes as parameters the loan amount, the interest rate, the loan term, and the installment type.

### Structure of Array
the library returns an array of objects, each of which represents a month of the loan. The object contains the following properties:
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