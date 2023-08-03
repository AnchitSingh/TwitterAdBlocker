hideDivs();

// Observer to detect added nodes
const observer = new MutationObserver(hideDivs);

// Run on childList changes under parent element  
observer.observe(document, {
    childList: true
});

function hideDivs() {
  
    const cellInnerDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');

    // Loop through each div 
    cellInnerDivs.forEach(div => {
        // Check if it contains a child div with the specific class and data attribute
        if (div.querySelector('div.css-1dbjc4n[data-testid="placementTracking"]')) {
            // If yes, set display to none
            div.style.display = 'none';
        }

    });
}
