function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function selectCategory(category) {
    document.getElementById("selected-category").textContent = category + " ▼";
    document.getElementById("searchInput").value = category;
    document.getElementById("dropdownContent").classList.remove("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
