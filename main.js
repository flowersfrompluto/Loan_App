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

// CHANGE EVENT LISTENER

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


// function acceptValues(){
    
    
//     num1=parseInt(fNum.value)
//     num2=parseInt(sNum.value)
//     opr=operator.value

//     calculate()
    
// }


function proceed(){

    let ans



    if(accountBal.value >= loan.value){
        
        ans = parseInt()
        if(acctType.value === "10"){
            if(creditHistory.value >= "6"){

            }
        }
    }



    // if(acctType.value === "10"){
    //     if(select.value === "Bank"){
    //         if(bankNetwork.value  == "Access Bank" || bankNetwork.value == "UBA" || bankNetwork.value == "Zenith Bank" || bankNetwork.value == "GTB" || bankNetwork.value == "Fidelity Bank" || bankNetwork.value == "Access Diamond" || bankNetwork.value == "FCMB" || bankNetwork.value == "Keystone Bank"){      
    //             if(accountNum.value != ""){
    //                 if(enterAmount.value <= 20000){
    //                     if(pin.value == 0000 || pin.value == 1234 || pin.value == 1995 || pin.value == 4177){
    //                         messageTxt.innerHTML="Transfer Successful !"
    //                         messageTxt.style.color="yellowgreen"
    //                         messageTxt.style.fontSize="17px"
    //                         endService()
    //                     }else(
    //                         pinError.innerHTML = "<i>Incorrect Pin !</i>"
    //                     )
    //                 }else(
    //                     enteramountError.innerHTML = "<i>Transfer amount exceeded !</i>"
    //                 )
    //             }
    //         }else{
    //             banknetworkError.innerHTML="<i>Input right Bank! Bank name is case sensitive</i>"
    //         }
    //     }else{
    //         selectError.innerHTML="Choose right option"
    //     }
    // }else if(operator.value === "Airtime"){
    //     if(select.value === "Network"){
    //         if(bankNetwork.value  == "MTN" || bankNetwork.value == "Airtel" || bankNetwork.value == "Glo" || bankNetwork.value == "9Mobile" || bankNetwork.value == "mtn" || bankNetwork.value == "airtel" || bankNetwork.value == "glo" || bankNetwork.value == "9mobile"){
    //             if(accountNum.value != "") {
    //                 if(enterAmount.value <= 5000){
    //                     if(pin.value == 0000 || pin.value == 1234 || pin.value == 1995 || pin.value == 4177){
    //                         messageTxt.innerHTML="Airtime Purchase Successful !"
    //                         messageTxt.style.color="yellowgreen"
    //                         messageTxt.style.fontSize="17px"
    //                         endService()
    //                     }else(
    //                         pinError.innerHTML = "<i>Incorrect Pin !</i>"
    //                     )
    //                 }else(
    //                     enteramountError.innerHTML = "<i>Airtime amount exceeded !</i>"
    //                 )
    //             }
    //         }else{
    //             banknetworkError.innerHTML="<i>Input right network! Network name is case sensitive</i>"
    //         }
    //     }else{
    //         selectError.innerHTML="Choose right option"
    //     }
    // }else {
    //     messageTxt.innerHTML="Congratulations, Your Loan Application is Successful !"
    //     endService()
    // }
    
}

function endService(){

    title.innerHTML = ""
    firstName.innerHTML = ""
    middleName.innerHTML = ""
    lastName.innerHTML = ""
    accountBal.innerHTML = ""
    loan.innerHTML = ""
    acctType.innerHTML = ""
    creditHistory.innerHTML = ""
    lastDeposit.innerHTML = ""
    date.innerHTML = ""
    repayment.innerHTML = ""

}