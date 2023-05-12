// Loan simulator
const interestRate = 1.75;

function calculateMonthlyQuote(loanTerm, loanAmount, interestRate) {
    console.log ("Quote details: 👇");
    breakdown = (loanAmount * interestRate) / loanTerm
    for (let i = 0; i < loanTerm; i++) {
        console.log ("Quote details" + (i + 1) + "$.MXN"+ breakdown.toFixed(2));
    }
}


