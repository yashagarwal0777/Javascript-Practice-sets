function calculateLoan(){
  loanAmountValue = document.getElementById("loan_amount").value

  interestRateValue = document.getElementById("Interest_rate").value

  MonthsToPayValue = document.getElementById("Months_to_pay").value

  interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue

  monthlyPayment = (loanAmountValue / 
    MonthsToPayValue + interest).toFixed(2)

    document.getElementById("payment").innerHTML =
    `Monthly Payment : ${monthlyPayment}`
}
