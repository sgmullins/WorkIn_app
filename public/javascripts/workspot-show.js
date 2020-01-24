let map;

function initMap() {
  let myLatLng = {
    lat: workspot.lat,
    lng: workspot.lng
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 9
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: workspot.name
  });
}

//toggle edit review form
$(".toggle-edit-form").on("click", function() {
  $(this).text() === "Edit" ? $(this).text("Cancel") : $(this).text("Edit");

  $(this)
    .siblings(".edit-review-form")
    .toggle();
});

// const editFormToggleButtons = document.querySelectorAll(".toggle-edit-form");
// for (const button of editFormToggleButtons) {
//   button.addEventListener("click", function(event) {
//     //toggle edit button text on click
//     if (
//       event.target.textContent === "Edit"
//         ? (event.target.textContent = "Cancel")
//         : (event.target.textContent = "Edit")
//     );
//     //toggle visibility of edit form
//     const form = document.querySelector(".edit-review-form");
//     // const form = event.target.nextElementSibling;
//     console.log(form);

//     // if (
//     //   editForm.style.display === "none"
//     //     ? (editForm.style.display = "block")
//     //     : editForm.style.display === "none"
//     // );
//   });
// }
