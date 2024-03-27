function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(cName) {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to hide the cookie banner
function hideCookieBanner() {
    document.querySelector('.cookies-card').classList.add('hidden');
}

// Function to show the cookie banner
function showCookieBanner() {
    document.querySelector('.cookies-card').classList.remove('hidden');
}

// Event listener for the "Accept all" button
document.querySelector('.cta').addEventListener('click', function() {
    // Hide the cookie banner
    hideCookieBanner();
    // Set the cookie
    setCookie("cookiesAccepted", "true", 30);
});

// Check if the user has accepted cookies on page load
document.addEventListener("DOMContentLoaded", function() {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
        // If cookies are not accepted, show the cookies banner
        showCookieBanner();
    }
});

