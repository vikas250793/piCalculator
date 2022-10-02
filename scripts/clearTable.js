function clearTable(){
    paymentTableData.innerHTML = `<table id="tableToExport">
    <tr class="headerRow">
      <th>Payment #</th>
      <th>Monthly Payment</th>
      <th>Interest paid</th>
      <th>Principal paid</th>
      <th>Total Payment</th>
      <th>Balance</th>
    </tr>
  </table>`;

  buttons.innerHTML = `
  <button onclick="fillTable()">Calculate</button>
  <button onclick="clearTable()">Clear</button>
  `;

  paymentTableClass[0].classList.toggle('active');
  payTableData[0].classList.toggle('active');
}