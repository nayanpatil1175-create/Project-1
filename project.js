// Wait until HTML is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // PANEL TABS
    // =========================

    const panelItems = document.querySelectorAll(".panel-ops p");

    panelItems.forEach(function (item) {

        item.addEventListener("click", function () {

            // Remove active class from all tabs
            panelItems.forEach(function (tab) {
                tab.classList.remove("active");
            });

            // Add active class to clicked tab
            this.classList.add("active");

            console.log("Clicked:", this.innerText);
        });

    });


    // =========================
    // SEARCH BUTTON
    // =========================

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {

        const searchText = searchInput.value.trim();

        if (searchText === "") {
            alert("Please enter something to search");
        } else {
            alert("You searched for: " + searchText);
        }

    });


    // Search when pressing Enter
    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            const searchText = searchInput.value.trim();

            if (searchText === "") {
                alert("Please enter something to search");
            } else {
                alert("You searched for: " + searchText);
            }

        }

    });


    // =========================
    // BOX "SEE MORE"
    // =========================

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(function (box) {

        const seeMore = box.querySelector("p");

        seeMore.addEventListener("click", function () {

            const title = box.querySelector("h2").innerText;

            alert("Opening: " + title);

        });

    });


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop = document.querySelector(".foot-panel1");

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =========================
    // CART
    // =========================

    const cart = document.querySelector(".nav-card");

    cart.addEventListener("click", function () {

        alert("Cart clicked!");

    });


    // =========================
    // ACCOUNT
    // =========================

    const account = document.querySelector(".nav-singin");

    account.addEventListener("click", function () {

        alert("Account & Lists clicked!");

    });


    // =========================
    // RETURNS & ORDERS
    // =========================

    const returns = document.querySelector(".nav-return");

    returns.addEventListener("click", function () {

        alert("Returns & Orders clicked!");

    });


    // =========================
    // ALL BUTTON
    // =========================

    const allButton = document.querySelector(".panel-all");

    allButton.addEventListener("click", function () {

        alert("All menu clicked!");

    });

});