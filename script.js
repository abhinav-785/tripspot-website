const CLIENT_ID = "1086560590292-01g0mdvlii0tscn3ceibcdk8ai57raq1.apps.googleusercontent.com"; // Replace with your actual Client ID

// Initialize Google Sign-In
function initializeGoogleSignIn() {
  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("google-signin-button"),
    { theme: "outline", size: "large" }
  );

  google.accounts.id.prompt(); // Automatically prompt for One Tap login
}

// Handle the credential response from Google
function handleCredentialResponse(response) {
  const decodedJwt = parseJwt(response.credential);

  // Display user information
  document.getElementById("google-signin-button").classList.add("hidden");
  document.getElementById("user-info").classList.remove("hidden");
  document.getElementById("user-name").innerText = decodedJwt.name;
  document.getElementById("user-email").innerText = decodedJwt.email;
  document.getElementById("user-image").src = decodedJwt.picture;
}

// Parse the JWT token to extract user information
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

// Logout function
document.getElementById("logout-button").addEventListener("click", () => {
  document.getElementById("google-signin-button").classList.remove("hidden");
  document.getElementById("user-info").classList.add("hidden");
});

// Initialize the Google Sign-In when the script loads
window.onload = initializeGoogleSignIn;
