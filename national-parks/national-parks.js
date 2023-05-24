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