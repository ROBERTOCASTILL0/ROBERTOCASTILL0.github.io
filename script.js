const reviewBanner = document.querySelector('.review-banner');

function moveReviews() {
    const firstReview = reviewBanner.querySelector('.review');
    reviewBanner.appendChild(firstReview);
}

setInterval(moveReviews, 2000); // Move reviews every 3 seconds (adjust as needed)
