// Loan simulator calculator
const interestRate = 17.00;

function calculateMonthlyQuote(loanTerm, loanAmount, interestRate) {
    console.log ("Quote details: here 👇🤑");
    breakdown = (loanAmount * interestRate) / loanTerm
    for (let i = 0; i < loanTerm; i++) {
        console.log ("Quote details" + (i + 1) + "$USD"+ breakdown.toFixed(2));
    }
}


