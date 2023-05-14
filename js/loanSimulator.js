// loan simulator ask user for loan questions.
function loanSimulator() {
    let loanAmount = parseInt(prompt("Enter loan amount"));
    let loanTerm = parseInt(prompt("Enter length of term. Up to 52 Months"));
    if (isNaN(loanAmount) || isNaN(loanTerm)) {
        console.error("The element entered is not a number. Please try again.");
        return;
    }

    if (loanTerm >= 1 && loanTerm <= 52) {
        alert("In a moment you can review the breakdown on your personal" + loanTerm + "month payments. Your monthly payments total. $" + loanAmount);
        calculateMonthlyQuote(loanTerm, loanAmount, interestRate);
    } else {
        console.warn("You exceeded the loan max terms of 36 months. Please try again.");
    }
}
