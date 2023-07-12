document.addEventListener("DOMContentLoaded", function() {
  var lightModeBtn = document.getElementById("light-mode-btn");
  var darkModeBtn = document.getElementById("dark-mode-btn");
  var lightIndicator = document.getElementById("light-indicator");
  var darkIndicator = document.getElementById("dark-indicator");

  lightModeBtn.addEventListener("click", function() {
    // Code to switch to light mode
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.insertCSS({ code: "body { background-color: #FFFFFF; }" });
    });
    lightIndicator.classList.add("active-light");
    darkIndicator.classList.remove("active-dark");
  });

  darkModeBtn.addEventListener("click", function() {
    // Code to switch to dark mode
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.insertCSS({ code: "body { background-color: #000000; }" });
    });
    darkIndicator.classList.add("active-dark");
    lightIndicator.classList.remove("active-light");
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.insertCSS(tab.id, { code: "body { background-color: #000000; }" });
      });
    });
  });
});
