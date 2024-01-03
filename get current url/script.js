function myFunction() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Display the current URL using innerHTML
    document.getElementById("currentUrl").innerHTML = "Current URL:file:///c:/Users/Admin/Desktop/jstask/Get Current Url/" + currentUrl;
}

// Call the function when the page loads
window.onload = getCurrentUrl;