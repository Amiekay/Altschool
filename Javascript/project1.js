let userName;
do {
  userName = prompt("Enter username", "");
} while (userName.length > 10);

let passWord;
do {
  passWord = prompt("Enter your password", "");
} while (passWord.length < 6);

let confirmPassWord = prompt("Confirm password", "");
if (passWord === confirmPassWord) {
  alert("Confirmed!");
} else {
  alert("wrong!");
}

let userDetails = { userName, passWord };
console.log(userDetails);
