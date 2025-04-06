function showSelectedCountry(event) {
  if (event.target.value === "South Africa") {
    alert("💙");
  }

  if (event.target.value === "Brazil") {
    alert("💛");
  }

  if (event.target.value === "Ghana") {
    alert("❤️");
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showSelectedCountry);

let honoluluDateElement = document.querySelector("#current-date");
let honoluluCurrentDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
honoluluDateElement.innerHTML = `It is ${honoluluCurrentDate} in Honolulu, Hawaii`;

let parisDateElement = document.querySelector("#future-date");
let parisDate = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:mm A");

parisDateElement.innerHTML = `10 years from now, it will be ${parisDate} in Paris France`;

let localTimeZoneElement = document.querySelector("#local-time-zone");
let currentTimeZone = moment.tz.guess();

localTimeZoneElement.innerHTML = currentTimeZone;
