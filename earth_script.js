function displayCalendar(month, year) {
    currentMonthYear.textContent = `${getMonthName(month)} ${year}`;
    calendar.innerHTML = ''; // Clear previous content

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); 

    let tableHTML = '<table>';
    tableHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
    tableHTML += '<tr>';

    let dayOfWeek = 0;
    let day = 1;

    // Fill in the empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      tableHTML += '<td></td>';
      dayOfWeek++;
    }

    // Fill in the days of the month
    for (let i = 0; i < daysInMonth; i++) {
      tableHTML += `<td>${day}</td>`;
      day++;
      dayOfWeek++;
      if (dayOfWeek === 7) {
        tableHTML += '</tr><tr>';
        dayOfWeek = 0;
      }
    }

    // Fill in the remaining empty cells for the days after the last day of the month
    while (dayOfWeek > 0 && dayOfWeek < 7) {
      tableHTML += '<td></td>';
      dayOfWeek++;
    }

    tableHTML += '</tr></table>';
    calendar.innerHTML = tableHTML;
}
