document.addEventListener('DOMContentLoaded', function() {
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const currentMonthYear = document.getElementById('currentMonthYear');
  const calendar = document.getElementById('calendar');

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  displayCalendar(currentMonth, currentYear);

  prevMonthBtn.addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    displayCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    displayCalendar(currentMonth, currentYear);
  });

  function displayCalendar( month, year) {
    currentMonthYear.textContent = `${getMonthName(month)} ${year}`;
    calendar.innerHTML = ''; // Clear previous content

    // Generate calendar content here
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); 

    let tableHTML = '<table>';
    tableHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
    tableHTML += '<tr>';

    let dayOfWeek = 0;
    for (let i = 1; i <= daysInMonth + firstDayOfMonth - 1; i++) {
      if (i >= firstDayOfMonth) {
        tableHTML += `<td>${i - firstDayOfMonth + 1}</td>`;
      } else {
        tableHTML += '<td></td>';
      }
      dayOfWeek++;
      if (dayOfWeek === 7) {
        tableHTML += '</tr><tr>';
        dayOfWeek = 0;
      }
    }
    tableHTML += '</tr></table>';
    calendar.innerHTML = tableHTML;
  }

  function getMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];

  }
});

My Calendar doesn't align with real world calendar

ChatGPT
It looks like the issue might be with how you're calculating the first day of the month and the days in the month. Let's check that part of the code.



User
Fix that
Can you fix that
ChatGPT
Sure! It seems like there might be an issue with how the first day of the month is calculated and how the days are displayed in the calendar. Let's correct that:

javascript
Copy code
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
This updated version should ensure that the calendar displays correctly aligned with the real-world calendar.





Message ChatGPT…

ChatGPT can make mistakes. Consider checking important 