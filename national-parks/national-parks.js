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
  
}

function addOptionsOnLocation() {

}

function addOptionsOnPark() {

}

function addAllOptions() {
  
}
