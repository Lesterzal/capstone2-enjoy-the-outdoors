// setting up event listeners for various elements on the page

window.onload = function () {
  const searchFilter = document.querySelector("#searchFilter");
  searchFilter.addEventListener("change", SearchFilterDropdowns);

  const searchByLocation = document.querySelector("#searchByLocation");
  searchByLocation.addEventListener("change", searchByLocationOnChange);

  const searchByParkType = document.querySelector("#searchByParkType");
  searchByParkType.addEventListener("change", searchByParkOnChange);

  const searchByNationalPark = document.querySelector("#searchByNationalPark");
  searchByNationalPark.addEventListener("change", displaysearchByNationalParkChange);

  document.querySelector("#searchByLocation").style.display = "none";
  document.querySelector("#searchByParkType").style.display = "none";
  document.querySelector("#searchByNationalPark").style.display = "none";
  document.querySelector("#parksDescription").style.display = "none";
};

// displaying different sets of search options based on the selected value of the search filter dropdown

function SearchFilterDropdowns() {
  const searchFilter = document.querySelector("#searchFilter").value;
  hideElements();

  if (searchFilter == "Location") {
    document.querySelector("#searchByLocation").style.display = "block";
    addOptionsOnLocation();
  } else if (searchFilter == "Park Type") {
    document.querySelector("#searchByParkType").style.display = "block";
    addOptionsOnPark();
  } else if (searchFilter == "All") {
    document.querySelector("#searchByNationalPark").style.display = "block";
    addAllOptions();
  }
}

// functions to add options dynamically to select elements based on different criteria

function addOptions(element, options) {
  for (let option of options) {
    const newOption = document.createElement("option");
    newOption.value = option;
    newOption.textContent = option;
    element.appendChild(newOption);
  }
}

function addOptionsOnLocation() {
  const searchByLocation = document.querySelector("#searchByLocation");
  searchByLocation.innerHTML = "";

  addOptions(searchByLocation, locationsArray);
}

function addOptionsOnPark() {
  const searchByParkType = document.querySelector("#searchByParkType");
  searchByParkType.innerHTML = "";

  addOptions(searchByParkType, parkTypesArray);
}

function addAllOptions() {
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

function searchByLocationOnChange() {
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

function searchByParkOnChange() {
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