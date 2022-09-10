// DECLARE VARIABLES

let title=document.getElementById("title")
let titleError=document.getElementById("titleError")
let firstName=document.getElementById("firstName")
let firstError=document.getElementById("firstError")
let middleName=document.getElementById("middleName")
let middleError=document.getElementById("middleError")
let lastName=document.getElementById("lastName")
let lastError=document.getElementById("lastError")
let accountBal=document.getElementById("accountBal")
let acctError=document.getElementById("acctError")
let loan=document.getElementById("loan")
let loanError=document.getElementById("loanError")
let acctType=document.getElementById("acctType")
let accttypeError=document.getElementById("accttypeError")
let creditHistory=document.getElementById("creditHistory")
let credithistoryError=document.getElementById("credithistoryError")
let lastDeposit=document.getElementById("lastDeposit")
let depositError=document.getElementById("depositError")
let date=document.getElementById("date")
let dateError=document.getElementById("dateError")
let repayment=document.getElementById("repayment")
let repaymentError=document.getElementById("repaymentError")
let btn=document.getElementById("btn")

let pointAward = 0

// EVENT LISTENER

btn.addEventListener("click", function (){

    validateData()
})

function validateData(){

    if (title.value == ""){
        titleError.innerHTML = "* Title can't be left empty"
    }else {
        titleError.innerHTML = ""
    }

    if (firstName.value == ""){
        firstError.innerHTML = "* First Name can't be left empty"
    }else {
        firstError.innerHTML = ""
    }

    if (lastName.value == ""){
        lastError.innerHTML = "* Last Name can't be left empty"
    }else {
        lastError.innerHTML = ""
    }

    if (accountBal.value != ""){
        acctError.innerHTML = ""
    }else {
        acctError.innerHTML = "* Current Account Balance is Required"
    }

    if (loan.value == ""){
        loanError.innerHTML = "* Loan Amount is Required"
    }else {
        loanError.innerHTML = ""
    }

    if (acctType.value == "") {
        accttypeError.innerHTML = "* Select an Account Type"
    }else{
        accttypeError.innerHTML = ""
    }

    if (creditHistory.value == "") {
        credithistoryError.innerHTML = "* Required"
    }else{
        credithistoryError.innerHTML = ""
    }

    if (lastDeposit.value == "") {
        depositError.innerHTML = "* Required"
    }else{
        depositError.innerHTML = ""
    }

    if (date.value == "") {
        dateError.innerHTML = "* Required"
    }else{
        dateError.innerHTML = ""
    }
    
    if (repayment.value == "") {
        repaymentError.innerHTML = "* Required"
    }else{
        repaymentError.innerHTML = ""
    }
    
    if (title.value != "" &&  firstName.value != "" && lastName.value != "" && accountBal.value != "" && loan.value != "" && acctType.value != "" && creditHistory.value != "" && lastDeposit.value != "" && date.value != "" && repayment.value != ""){
        proceed()
    }
    
}


function proceed(){
      

    if(accountBal.value > loan.value){
        pointAward += 10        
    }else{
        pointAward -= 10
    }
   
    if(creditHistory.value == "1"){
        pointAward += 0
    }else{
        pointAward += 10
    }

    if(lastDeposit.value == "1"){
        pointAward += 5
    }else{
        pointAward += 0
    }
    
    if(lastDate.value == "1"){
        pointAward += 0
    }else{
        pointAward += 10
    }

    if(repayment.value == "1"){
        pointAward += 5
    }else{
        pointAward += 0
    }

    if(acctType.value == "1"){
        pointAward += 10
    }else{
        pointAward += 5
    }

    process()
    
}

function process(){
    if (pointAward > 30){
        messageTxt.innerHTML = "You have " + pointAward + " points and " + "your Loan request has been accepted"
        messageTxt.style.color = "green"
    }else {
        messageTxt.innerHTML =  "You have " + pointAward + " points and " + "your Loan request has been rejected !"
        messageTxt.style.color = "red"
    }

    endService()
}

function endService(){

    title.value = ""
    firstName.value = ""
    middleName.value = ""
    lastName.value = ""
    accountBal.value = ""
    loan.value = ""
    acctType.value = ""
    creditHistory.value = ""
    lastDeposit.value = ""
    date.value = ""
    repayment.value = ""

}