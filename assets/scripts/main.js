console.log(
    "Like Our Facebook Page ====> https://www.facebook.com/steamstorebd"
);
console.log("join Our Steam Group ====> (on hold currently)");
console.log("join Our Discord Server ====> https://discord.gg/CCeKuTPbC5");
console.log("The Site is not yet fully ready.");
console.log("This is only to show what is available.");
console.log("So please contact the page owner to actually buy/trade.");
console.log("Have a good day, sir.");

// scroll
document.getElementById("nav-toggle").addEventListener("change", function () {
    if (this.checked) {
        document
            .getElementById("header")
            .style.setProperty("background-color", "#009cf8");
    } else {
        document
            .getElementById("header")
            .style.setProperty("background-color", "#009efa4d");
    }
});
