var dt = new Date();
function loadPage() {
  dt.setDate(1);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("date_str").innerHTML = dt.toDateString();
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  // get EndDate
  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  var cells = "";
  // prev Date
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  // get day
  var day = dt.getDay();

  // todays date
  var today = new Date();

  for (x = day; x > 0; x--) {
    cells += "<div class='prev-days'>" + (prevDate - x + 1) + "</div>";
  }
  for (i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function move(event) {
  if (event == "prev") {
    dt.setMonth(dt.getMonth() - 1);
    loadPage();
  } else {
    if (event == "next") {
      dt.setMonth(dt.getMonth() + 1);
    }
  }
  loadPage();
}
