// setting up event listeners for various elements on the page

window.onload = function () {
  const searchFilter = document.querySelector("#searchFilter");
  searchFilter.addEventListener("change", handleFilterDropdownChange);

  const searchByLocation = document.querySelector("#searchByLocation");
  searchByLocation.addEventListener("change", handleLocationChange);

  const searchByParkType = document.querySelector("#searchByParkType");
  searchByParkType.addEventListener("change", handleParkChange);

  const searchByNationalPark = document.querySelector("#searchByNationalPark");
  searchByNationalPark.addEventListener("change", handleNationalParkChange);

  document.querySelector("#searchByLocation").style.display = "none";
  document.querySelector("#searchByParkType").style.display = "none";
  document.querySelector("#searchByNationalPark").style.display = "none";
  document.querySelector("#parksInformation").style.display = "none";
};

// displaying different sets of search options based on the selected value of the search filter dropdown

function handleFilterDropdownChange() {
  const searchFilter = document.querySelector("#searchFilter").value;
  hideElements();

  if (searchFilter == "Location") {
    document.querySelector("#searchByLocation").style.display = "block";
    populateLocationOptions();
  } else if (searchFilter == "Park Type") {
    document.querySelector("#searchByParkType").style.display = "block";
    populateParkOptions();
  } else if (searchFilter == "All") {
    document.querySelector("#searchByNationalPark").style.display = "block";
    populateAllOptions();
  }
}

// functions to add options dynamically to select elements based on different criteria

function populateOptions(element, options) {
  for (let option of options) {
    const newOption = document.createElement("option");
    newOption.value = option;
    newOption.textContent = option;
    element.appendChild(newOption);
  }
}

function populateLocationOptions() {
  const searchByLocation = document.querySelector("#searchByLocation");
  searchByLocation.innerHTML = "";

  populateOptions(searchByLocation, locationsArray);
}

function populateParkOptions() {
  const searchByParkType = document.querySelector("#searchByParkType");
  searchByParkType.innerHTML = "";

  populateOptions(searchByParkType, parkTypesArray);
}

function populateAllOptions() {
  const searchByNationalPark = document.querySelector("#searchByNationalPark");
  searchByNationalPark.innerHTML = "";

  const selectNationalParkOption = document.createElement("option");
  selectNationalParkOption.value = "";
  selectNationalParkOption.textContent = "Select a National Park";
  searchByNationalPark.appendChild(selectNationalParkOption);

  for (let park of nationalParksArray) {
    const newNationalParkOption = document.createElement("option");
    newNationalParkOption.value = park.LocationName;
    newNationalParkOption.textContent = park.LocationName;
    searchByNationalPark.appendChild(newNationalParkOption);
  }
}

// change events 

function handleLocationChange() {
  const searchByLocation = document.querySelector("#searchByLocation").value;
  const searchByNationalPark = document.querySelector("#searchByNationalPark");

  searchByNationalPark.innerHTML = "";

  const newOption = document.createElement("option");
  newOption.value = "";
  newOption.text = "Please Select a Park ";
  searchByNationalPark.appendChild(newOption);

  for (let place of nationalParksArray) {
    if (searchByLocation == place.State) {
      const locationOption = document.createElement("option");
      locationOption.value = place.LocationName;
      locationOption.text = place.LocationName;
      searchByNationalPark.appendChild(locationOption);

      searchByNationalPark.style.display = "block";
    } else if (searchByLocation == "") {
      searchByNationalPark.style.display = "none";
    }
  }
}

function handleParkChange() {
  const searchByParkType = document.querySelector("#searchByParkType").value;
  const searchByNationalPark = document.querySelector("#searchByNationalPark");

  searchByNationalPark.innerHTML = "";

  const option = document.createElement("option");
  option.value = "";
  option.textContent = "Please Select a Park ";
  searchByNationalPark.appendChild(option);

  for (let park of nationalParksArray) {
    if (park.LocationName.includes(searchByParkType) && searchByParkType !== "") {
      const parkOption = document.createElement("option");
      parkOption.value = park.LocationName;
      parkOption.textContent = park.LocationName;

      searchByNationalPark.appendChild(parkOption);
      searchByNationalPark.style.display = "block";
    }
  }
}

function handleNationalParkChange() {
  const searchByNationalPark = document.querySelector("#searchByNationalPark");
  const parksInformation = document.querySelector("#parksInformation");

  for (let park of nationalParksArray) {
    if (searchByNationalPark.value == park.LocationName) {
      parksInformation.style.display = "block";
      parksInformation.innerHTML =
        "<span style='color: white;'>Name : </span>" +
        park.LocationName +
        "<br/>" +
        "<span style='color: white;'>Address : </span>" +
        park.Address +
        "<br/>" +
        "<span style='color: white;'>City : </span>" +
        park.City +
        "<br/>" +
        "<span style='color: white;'>State : </span>" +
        park.State +
        "<br/>" +
        "<span style='color: white;'>Zip Code : </span>" +
        park.ZipCode;
    } else if (searchByNationalPark.value == "") {
      parksInformation.style.display = "none";
    }
  }
}

function hideElements() {
  document.querySelector("#searchByLocation").style.display = "none";
  document.querySelector("#searchByParkType").style.display = "none";
  document.querySelector("#searchByNationalPark").style.display = "none";
  document.querySelector("#parksInformation").style.display = "none";
}
