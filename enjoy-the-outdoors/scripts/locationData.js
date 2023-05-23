const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];


const selectElement = document.querySelector("#state-selection")

window.onload = main

function main () {
    // loadImages()
    populateAlbumDropdown()
}

function populateAlbumDropdown() {

    // The target of a form's "submit" event is the form.
    // The target of a click event is the element clicked.
    // The target of a change event is the element changed. 

    selectElement.onchange = handleAlbumChange

    for (const album of albums) {
        // Example: <option value="album.folder">album.name</option>

        // 1. Create a new empty element by tag name:
        const option = document.createElement("option")

        // 2. Customize the new baby element:
        option.value = album.folder
        option.innerText = album.name

        // 3. Add it to a branch which is already on the page:
        selectElement.append(option)
    }
}





/*
function loadStatesDropdownList(locationArrayStateSelections) {
  let stateNames = "";
  for (i = 0; i < locationArrayStateSelections.length; i += 1) {
    const stateString = locationArrayStateSelections[i]
    stateNames += `<option value=${stateString}>${stateString}</option>`;
  }
  return stateNames;
}
   
function addStatesToDropdownList() {
  const selectStateElement = document. querySelector("#state-selection");

  selectStateElement.innerHTML=loadStatesDropdownList(locationsArray);

  selectStateElement.onchange = stateChange;
}
*/