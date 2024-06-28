// Function to accept cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Function to reject cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookieBanner').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}

// Check if cookies were previously accepted
window.onload = function() {
    var cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
        document.getElementById('cookieBanner').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else if (cookiesAccepted === 'false') {
        document.getElementById('cookieBanner').style.display = 'none';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('cookieBanner').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }
};
