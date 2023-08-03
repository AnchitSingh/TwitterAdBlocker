var adCount = 0;
function hasChildWithParameters(div) {
    const expectedDataTestIds = [
        'top-impression-pixel',
        'right-impression-pixel',
        'bottom-impression-pixel',
        'left-impression-pixel',
    ];

    const childDivs = div.querySelectorAll('div.css-1dbjc4n[data-testid="placementTracking"]');
    if (childDivs.length === 0) {
        return false;
    }

    // Check if the child div contains four divs with the expected data-testid values
    const childDivChildren = childDivs[0].querySelectorAll('div[data-testid]');
    const actualDataTestIds = Array.from(childDivChildren).map((child) => child.getAttribute('data-testid'));

    return expectedDataTestIds.every((dataTestId) => actualDataTestIds.includes(dataTestId));
}

// Function to update the ad count in the popup
function updateAdCount(count) {
    console.log(count)
}


// Function to set the display property of divs with the specified parameters
function hideDivsWithChildParameters() {
    const cellInnerDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
    cellInnerDivs.forEach((div) => {
        if (hasChildWithParameters(div)) {
            if (div.style.display != 'none') {
                adCount += 1;
                updateAdCount(adCount);
            }
            div.style.display = 'none';
        }
    });
}
// Initial call to hide the divs that match the criteria on page load
hideDivsWithChildParameters();

// Using MutationObserver to watch for changes in the DOM and hide new divs accordingly
const observer = new MutationObserver(() => {
    hideDivsWithChildParameters();
});

// Start observing changes in the entire document
observer.observe(document, {
    childList: true,
    subtree: true,
});
