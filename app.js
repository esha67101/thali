
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3V--eyqU5ygCUcx1C_qgQFxvbmSHxtlc",
  authDomain: "thali-b5293.firebaseapp.com",
  projectId: "thali-b5293",
  storageBucket: "thali-b5293.firebasestorage.app",
  messagingSenderId: "950525778228",
  appId: "1:950525778228:web:8663b5350312a6244dad61",
  measurementId: "G-7LZV1XYDXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Signup Functionality
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const businessName = document.getElementById("businessName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed up
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Optionally, save additional user details to Firestore
        alert("Sign-up successful! You can now log in.");
        window.location.href = "login-business.html";
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        alert(error.message);
      });
  });
}

// Login Functionality
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        console.log("User logged in:", user);
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "available-food.html"; // Replace with your dashboard page
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        alert("Invalid email or password!");
      });
  });
}