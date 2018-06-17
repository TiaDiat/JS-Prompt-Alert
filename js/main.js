var firstName = prompt ("What is your first name?");

var lastName = prompt ("What is your last name?");

var age = prompt ("How old are you?");

alert ("Hello, " + firstName + " " + lastName + "!");

var ageMonths = (age * 12);

var ageDays = (age * 365);

document.write (firstName + " " + lastName + " " + "is" + " " + ageMonths + " months" + " " + "old" + " " + "and " + ageDays + " days" + " " + "old.");