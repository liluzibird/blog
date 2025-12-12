---
type : notes
title: 2025-10-13
date: 2025-10-13T11:06:08-07:00
featured: false
draft: false
comment: true
toc: true
reward: true
pinned: false
carousel: false
series:
categories: []
tags: []
images: []
---

Summary.

<!--more-->

## Cases and CRUD 
- CRUD 
  - Create 
  - Read/Report 
  - Update 
  - Delete 
- Cross-check against the existing set of use cases. 
  - Ensure all classes have a complete "cover" of use cases 
- Not for primary identification of use cases 
- Another use of CRUD technique is to summarize all use cases and all data entities/domain classes to show the connection between use cases and data.

|Use case vs. entity/domain class|Customer|Account|Sale|Adjustment|
|-|-|-|-|-|
|Create customer account|C|C| | |
|Look up customer|R|R| | |
|Produce customer usage report|R|R|R| |
|Process account adjustment|R|U|R|C|
|Update customer account|UD[archive]|UD [archive]| | |

Example for classes:
- Parking classes
  - Structure/Lot 
    - INSERT new structure/Lot (Adding a new structure)
    - SELECT structure/lot (choosing lots for a query)
    - UPDATE structure/lot (update names, capacity size)
    - DELETE structure/lot (demolished)


