# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion with the addition operator. The `bug.js` file contains the faulty code, while `bugSolution.js` provides a corrected version.

The bug arises when the function `foo` receives string arguments.  Instead of performing numerical addition, the '+' operator concatenates the strings.  The solution explicitly converts the input values to numbers before performing the addition.