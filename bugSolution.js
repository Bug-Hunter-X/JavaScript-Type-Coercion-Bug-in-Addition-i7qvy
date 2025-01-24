function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  a = Number(a); //Convert to Number
  b = Number(b); //Convert to Number
  return a + b; //Corrected line
}