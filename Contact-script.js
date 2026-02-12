let error = document.querySelector(".error")
let mainError = document.querySelector(".mainMsg")
let msg = document.querySelector("#msg")
let num = document.querySelector("#num")
let btn = document.querySelector("#btn")
let mainErrorMsg = document.querySelector(".errorMsg")

let inputNum = document.querySelector("#num")
let inputText = document.querySelector("#msg")
let tryBtn = document.querySelector(".myMsgBtn")
let finalMsg = document.querySelector(".mainMsg")


let main = document.querySelector(".main")
wrongNum = inputNum.value


let incomplete = "Please Enter your complete information first."
let wrongNumMsg = "wrong mobile no. Please enter correct mobile no."
let success = "Your message has been received successfully. I’ll get back to you within 24 hours."


function messagess() {
    if (inputNum.value === "" || inputText.value === "") {
        error.classList.remove("error2")
        mainErrorMsg.style.backgroundColor = "red"
        mainError.innerText = incomplete
        main.classList.add("main2")
        tryBtn.innerText = "Try Again"
    }
    else if (inputNum.value != "" && inputText.value != "") {
        error.classList.remove("error2")
        mainErrorMsg.style.backgroundColor = "blue"
        mainError.innerText = success
        main.classList.add("main2")
        tryBtn.innerText = "Done"
        setTimeout(() => {
            document.querySelector("form").submit();
        }, 800);
    }
}


function wrongnumber() {
    let num = inputNum.value.trim();
    let len = num.length;
    numberSol = /^\d+$/.test(num)

    if (len === 0) {
        messagess();
    }
    else if (len < 10 || numberSol == false) {
        error.classList.remove("error2")
        mainErrorMsg.style.backgroundColor = "red"
        mainError.innerText = wrongNumMsg
        main.classList.add("main2")
        tryBtn.innerText = "Try Again"
    }
    else if (len == 10) {
        messagess()
    }
}



btn.addEventListener("click", () => {
    wrongnumber()
})


tryBtn.addEventListener("click", () => {
    error.classList.add("error2")
    main.classList.remove("main2")
    inputNum.value = ""
    inputText.value = ""
})