// const CLIENT_ID = "1086560590292-01g0mdvlii0tscn3ceibcdk8ai57raq1.apps.googleusercontent.com"; // Replace with your actual Client ID

// // Initialize Google Sign-In
// function initializeGoogleSignIn() {
//   google.accounts.id.initialize({
//     client_id: CLIENT_ID,
//     callback: handleCredentialResponse,
//   });

//   google.accounts.id.renderButton(
//     document.getElementById("google-signin-button"),
//     { theme: "outline", size: "large" }
//   );

//   google.accounts.id.prompt(); // Automatically prompt for One Tap login
// }

// // Handle the credential response from Google
// function handleCredentialResponse(response) {
//   const decodedJwt = parseJwt(response.credential);

//   // Display user information
//   document.getElementById("google-signin-button").classList.add("hidden");
//   document.getElementById("user-info").classList.remove("hidden");
//   document.getElementById("user-name").innerText = decodedJwt.name;
//   document.getElementById("user-email").innerText = decodedJwt.email;
//   document.getElementById("user-image").src = decodedJwt.picture;
// }

// // Parse the JWT token to extract user information
// function parseJwt(token) {
//   const base64Url = token.split(".")[1];
//   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   return JSON.parse(window.atob(base64));
// }

// // Logout function
// document.getElementById("logout-button").addEventListener("click", () => {
//   document.getElementById("google-signin-button").classList.remove("hidden");
//   document.getElementById("user-info").classList.add("hidden");
// });

// // Initialize the Google Sign-In when the script loads
// window.onload = initializeGoogleSignIn;
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

  // Check login state on page load
  checkLoginState();
}

// Handle the credential response from Google
function handleCredentialResponse(response) {
  const decodedJwt = parseJwt(response.credential);

  // Save user info in localStorage
  localStorage.setItem("userLoggedIn", "true");
  localStorage.setItem("userName", decodedJwt.name);
  localStorage.setItem("userEmail", decodedJwt.email);
  localStorage.setItem("userImage", decodedJwt.picture);

  updateUI(true);
}

// Parse the JWT token to extract user information
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

// Check login state from localStorage
function checkLoginState() {
  if (localStorage.getItem("userLoggedIn") === "true") {
    updateUI(true);
  } else {
    updateUI(false);
  }
}

// Update UI based on login state
function updateUI(isLoggedIn) {
  const signInButton = document.getElementById("google-signin-button");
  const userInfo = document.getElementById("user-info");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userImage = document.getElementById("user-image");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (isLoggedIn) {
    signInButton.classList.add("hidden");
    userInfo.classList.remove("hidden");

    userName.innerText = localStorage.getItem("userName");
    userEmail.innerText = localStorage.getItem("userEmail");
    userImage.src = localStorage.getItem("userImage");

    // Update dropdown menu
    dropdownMenu.innerHTML = `
      <a href="bookings.html" class="dropdown-item">Bookings</a>
      <a href="#" class="dropdown-item" id="logout-button">Logout</a>
    `;

    document.getElementById("logout-button").addEventListener("click", logout);
  } else {
    signInButton.classList.remove("hidden");
    userInfo.classList.add("hidden");

    // Reset dropdown menu
    dropdownMenu.innerHTML = `
      <a href="login.html" class="dropdown-item">Login</a>
    `;
  }
}

// Logout function
function logout() {
  // Sign out from Google
  google.accounts.id.disableAutoSelect();

  // Remove user data from localStorage
  localStorage.removeItem("userLoggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userImage");

  // Refresh UI
  updateUI(false);

  alert("You have been logged out.");
}

// Initialize the Google Sign-In when the script loads
window.onload = initializeGoogleSignIn;
