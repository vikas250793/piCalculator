function fillTable(){

    let rateInpt = document.getElementById('interestRate');
    let amountInpt = document.getElementById('loanAmount');
    let termInpt = document.getElementById('loanTerm');

    let rate = rateInpt.value;
    let loanAmount = amountInpt.value;
    let term = termInpt.value;

    let outStandingBalance = loanAmount;
    let paymentData = [];
    let totalAmountPaid = 0.00;

    let normalisedRate = monthlyRate(rate);
    let normalisedTerm = termMonths(term);
    let indexCal = powmonthlyRate(normalisedRate,normalisedTerm);
    let monthlyPayment = getMonthlyPayment(outStandingBalance,normalisedRate,indexCal);

    for (i=1;i<=normalisedTerm;i++){
        
        let interestPaid = normalisedRate*outStandingBalance;
        let principalPaid = monthlyPayment - interestPaid;
        totalAmountPaid += monthlyPayment;
        outStandingBalance -= principalPaid;

        let formatMonthPayment = getFormatted(monthlyPayment);
        let formatPrincipalPaid = getFormatted(principalPaid);
        let formatInterestPaid = getFormatted(interestPaid);
        let formatTotalAmountPaid = getFormatted(totalAmountPaid);
        let formatOutstandingBalance = getFormatted(outStandingBalance);

        let monthData = [i,formatMonthPayment,formatInterestPaid,formatPrincipalPaid,formatTotalAmountPaid,formatOutstandingBalance];
        paymentData.push(monthData);
    }

    let htmlTableOut = '';

    for (j=0;j<normalisedTerm;j++){
        let row = paymentData[j];
        let rowString = '';
        for(k=0;k<row.length;k++){
            if(k===0){
                rowString += `
                <td>${row[k]}</td>
                `;
            }
            else{
                rowString += `<td>${row[k]}</td>`;
            }
        }

        htmlTableOut += `<tr>${rowString}</tr>`;
    }

    paymentTableData.innerHTML = `<table id="tableToExport">
    <tr class="headerRow">
      <th>Payment #</th>
      <th>Monthly Payment</th>
      <th>Interest paid</th>
      <th>Principal paid</th>
      <th>Total Payment</th>
      <th>Balance</th>
    </tr>
    ${htmlTableOut}
  </table>`;

  buttons.innerHTML = `
  <button onclick="fillTable()">Calculate</button>
  <button onclick="clearTable()">Clear</button>
  <button onclick="generatePDF()">Export PDF</button>
  <button onclick="exportToCsv()">Export csv</button>
  `;

  paymentTableClass[0].classList.toggle('active');
  payTableData[0].classList.toggle('active');
}