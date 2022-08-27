let id;
let message = document.getElementById("message");
message.innerHTML = null;

let arr = JSON.parse(localStorage.getItem("userData")) || [];
class user {
  constructor() {}



  validatePassword(password) {
    let value;

    password = password.trim().split("");

    value =
      password.length >= 8 &&
      (password.includes("1") ||
        password.includes("2") ||
        password.includes("3") ||
        password.includes("4") ||
        password.includes("5") ||
        password.includes("6") ||
        password.includes("7") ||
        password.includes("8") ||
        password.includes("9") ||
        password.includes("0")) &&
      (password.includes("a") ||
        password.includes("b") ||
        password.includes("c") ||
        password.includes("d") ||
        password.includes("e") ||
        password.includes("f") ||
        password.includes("g") ||
        password.includes("h") ||
        password.includes("i") ||
        password.includes("j") ||
        password.includes("k") ||
        password.includes("l") ||
        password.includes("m") ||
        password.includes("n") ||
        password.includes("o") ||
        password.includes("p") ||
        password.includes("q") ||
        password.includes("r") ||
        password.includes("s") ||
        password.includes("t") ||
        password.includes("u") ||
        password.includes("v") ||
        password.includes("w") ||
        password.includes("x") ||
        password.includes("y") ||
        password.includes("z")) &&
      (password.includes("A") ||
        password.includes("B") ||
        password.includes("C") ||
        password.includes("D") ||
        password.includes("E") ||
        password.includes("F") ||
        password.includes("G") ||
        password.includes("H") ||
        password.includes("I") ||
        password.includes("J") ||
        password.includes("K") ||
        password.includes("L") ||
        password.includes("M") ||
        password.includes("N") ||
        password.includes("O") ||
        password.includes("P") ||
        password.includes("Q") ||
        password.includes("R") ||
        password.includes("S") ||
        password.includes("T") ||
        password.includes("U") ||
        password.includes("V") ||
        password.includes("W") ||
        password.includes("X") ||
        password.includes("Y") ||
        password.includes("Z"))
        ? true
        : false;
    return value;
  }

  signup(email, password,first, last, mobile) {
    let isValidate = false;

    isValidate = this.validatePassword(password);

    if (isValidate) {
      this.email = email;
      this.password = password;
      this.firstName=first;
      this.lastName=last;
      this.mobile=mobile
      arr.push(this);
      localStorage.setItem("userData", JSON.stringify(arr));
      alert("registeration is successfull");
      window.location.href="login.html"

    } else {
      message.innerHTML = " *Please fill password as per condition* ";
      message.style.color = "#e91c1c";
      message.style.fontWeight = "800";
    }
  }
}

// catching the input values

document.getElementById("button").addEventListener("click", function () {
  let email = document.getElementById("user_email").value;
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;

  let user1 = new user();
  user1.signup(email, password, first, last, mobile);
});
