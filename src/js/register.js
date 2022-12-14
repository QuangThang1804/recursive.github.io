// import axios from "axios";
import registerUser from "../apiServices/user/registerUser.js";

// đăng ký

const buttonRegister = document.querySelector(".buttonRegister");
// console.log(buttonRegister);

async function handerRegister(e) {
    e.preventDefault()
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const emailRegister = document.getElementById("emailRegister").value;
    const personCode = document.getElementById("personCode").value;
    const passwordRegister = document.getElementById("passwordRegister").value;
    const passwordRegisterAgain = document.getElementById('passwordRegisterAgain').value;
    const isLecturers = document.querySelector("#pickGV").checked ? 1 : 0;
    const isStudent = document.querySelector("#pickSV").checked ? 1 : 0;
    console.log(isLecturers)
    console.log(isStudent);
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: emailRegister,
        password: passwordRegister,
        codeSudentOrLecturers: personCode,
        isLecturers: isLecturers,
        isStudent: isStudent,

    }
    console.log(user);

    const res = await registerUser(user)
    console.log(res);
    if (res) {
        window.location = "/login.html"
    } else {
        alert("Vui lòng đăng ký lại nha!")
    }

}

buttonRegister.addEventListener('click', (e) => handerRegister(e));




