---
type : notes
title: 2025-09-22
date: 2025-09-22T10:33:58-07:00
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

## Details about Domain Classes
- Attribute
	- Describes one piece of info about each instance of the class
- Identifier or key
	- One attribute uniquely identifies an instance of the class. Required for data entities, optional for domain classes. Customer ID identifies a customer (E.g, broncoID)
- Compound attribute
	- Two or more attributes combined into one structure to simplify the model (e.g, address rather than number, street, city, etc.). Sometimes an identifier or key is a compound attribute (1 attribute)
		- 5 text boxes for address instead of 1 compound address text box
		- Instead of having a sectionID key as a foreign key when linking a Course class with Section class, we can eliminate that sectionID in place of a compound key that uses the CourseID column with the SectionNum column to make a unique identifier for each row.

## Association Among Things
- Association
	- A naturally occurring relationship between classes (UML term)## Types of Associations
	- Binary Association
		- Associations between exactly two different classes
	- Unary Association (recursive)
	- Ternary Association (three)
	- N-ary Association (between n)



