//Equality and Inequality Test 1
console.log("Equality test with Strings:", "Apple" === "Apple"); 
//Equality and Inequality Test 2 
console.log("Equality test with Strings:", ("Apple" as string) != "Orange");  

// Tests using the loswer case function
console.log("Lower Case Function test: ", "HELLO".toLowerCase() === "hello");  

// Numerical tests involving equality 
console.log("Equality test with numbder: ", 26 === 26);  
// Numerical tests involving  inequality
console.log("Inquality test with numbder: ", (26 as number) != 35);   

// Greater than test
console.log("Greater than test: ", 10 > 5);  

// Less than test
console.log("Greater than test: ", 5 < 10);  


// Greater than or Equal to 
console.log("Greater than and Equel to test: ", 10 >= 10);
// less than or equal to 
console.log("less than or equal to test:", 5 <= 10 ); 

// Tests using "and" operators 
console.log("And operator test:", 5===5 && 10 > 5);  
// Tests using "or" operators 
console.log("Or operator test:", 5===5 || 10 > 5);  

// Test whether an item is not in a array 
const fruits :string[] = ['Apple', 'Banana','Apricot']; 
console.log('Test "Apple" in the arry: ', fruits.includes("Apple")); 
// Test whether an item is not in a array 
console.log('Testing "pear" is not in the arry: ', !fruits.includes("pear")); 
