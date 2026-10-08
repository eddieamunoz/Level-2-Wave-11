// Login/API authorization page-------------------------------------------------------------


function generateCodeVerifier(length) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function handleLogin() {
    const verifier = generateCodeVerifier(64);
    localStorage.setItem("code-verifier", verifier);
    const challenge = await generateCodeChallenge(verifier);

    const url = "https://accounts.spotify.com/authorize" +
  "?client_id=" + "de8f112a225c42a38af653787a649cb3" +
  "&redirect_uri=" + encodeURIComponent("http://127.0.0.1:5500/callback.html") +
  "&response_type=code" +
  "&scope=" + encodeURIComponent("user-read-private user-read-email user-top-read") +
  "&code_challenge_method=S256" +
  "&code_challenge=" + challenge;

  window.location.href = url

}
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  document.getElementById("login-btn").addEventListener("click", handleLogin);
}

// Objects for API Usage ----------------------------------------------------------------

// const tracks = {
//   id: "abc123",
//   name: "Song Title",
//   artist: "Artist Name",
//   albumArt: "https://...",
//   spotifyUrl: "https://open.spotify.com/tracks"
// }

// const artist = {
//   id: "xyz789",
//   name: "Artist Name",
//   image: "https://",
//   genres: ["indie pop", "bedroom pop"]
// }

// const album = {
//     id: "fghjk",
//     albumName: "ALbum Name",
//     albumArt: "https://"
// }
// Callback page functions ----------------------------------------------------

async function handleCallback() {
  try {
    const code = new URLSearchParams(window.location.search).get("code");
    const verifier = localStorage.getItem("code-verifier");
    const newParams = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://127.0.0.1:5500/callback.html",
      client_id: "de8f112a225c42a38af653787a649cb3",
      code_verifier: verifier
    });

    const res = await axios.post("https://accounts.spotify.com/api/token", newParams,
      {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
    );
    console.log(res.data);
    const accessToken = res.data.access_token;
    localStorage.setItem("access-token", accessToken);

    window.location.href = "dashboard.html";
  }
    catch (error) {
      const status = document.querySelector("p");
      status.textContent = "error loading page."
      console.log(error);
  }
} 


const callbackCode = new URLSearchParams(window.location.search).get("code");
if (callbackCode) {
  handleCallback();
}






// const mockProfile = {
//   display_name: "Test User",
//   id: "testuser123",
//   email: "test@example.com",
//   images: [{ url: "https://placehold.co/200x200" }],
//   external_urls: { spotify: "https://open.spotify.com/user/testuser123" },
// };

// Dashboard Functions Pouplating Profile, Track List and Artist List ----------------------------------------------------------------

function createAvatar(imageUrl) {
  const image = document.createElement("img");
  image.alt = "Profile Picture";
  image.src = imageUrl;
  image.classList.add("avatar");

  return image;

}

function populateProfile(mockProfile) {

  document.getElementById("displayName").textContent = mockProfile.display_name;
  document.getElementById("userId").textContent = mockProfile.id;
  document.getElementById("email").textContent = mockProfile.email;

  if (mockProfile.images[0]) {
    document.getElementById("avatar").appendChild(createAvatar(mockProfile.images[0].url));
    document.getElementById("imgUrl").textContent = mockProfile.images[0].url;

    
  }
}

// populateProfile(mockProfile);

function getToken() {
  const token = localStorage.getItem("access-token");
  if (token === null) {
    window.location.href = "index.html";
    return null;
  } else {
    return token;
  }
}

function showStatus(message) {
  document.getElementById("status").textContent = message;

}

async function fetchProfile(token) {
  const res = await axios.get("https://api.spotify.com/v1/me", {headers: {Authorization: `Bearer ${token}`}});
  return res.data;
}


async function loadProfile() {
  try {
    showStatus("Loading Profile...");
    const token = getToken();
      if (token === null) {
        return;
      }
    
     const profile = await fetchProfile(token);
      populateProfile(profile);
      showStatus("");
    } catch (error) {
      console.log(error);
      showStatus("Error loading Profile... Try again!");
  }
}

async function fetchTop(token, type) {
  const res = await axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=10`,
    {headers: {Authorization: `Bearer ${token}`}});

    return res.data.items;
}

function createTrackCard(track) {
  const li = document.createElement("li");
  li.classList.add("card");
  
  const text = document.createElement("span");
  text.textContent = `${track.name} - ${track.artists[0].name}`;

  if (track.album.images[0]) {
    const img = createImageCard(track.album.images[0].url, track.album.name);
    li.appendChild(img);
  }
  li.appendChild(text);
  return li;

}

function createArtistCard(artist) {
  const li = document.createElement("li");
  li.classList.add("card");
  const text = document.createElement("span");
  text.textContent = `${artist.name}`;

  if(artist.images[0]) {
    const img = createImageCard(artist.images[0].url, artist.name);
    li.appendChild(img);
  }
  li.appendChild(text);
  return li;
}

function createImageCard(imageUrl, altText) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  image.classList.add("card-img");

  return image;
}

function loadList(items, containerId, createCard) {
  const container = document.getElementById(containerId);
  container.textContent = "";

  items.forEach(item => {
    container.appendChild(createCard(item))
  });
}

async function loadTracks() {
  try {
    const token = getToken();
    const tracks = await fetchTop(token, "tracks");
    loadList(tracks, "tracks-list", createTrackCard)
  } catch (error) {
    console.log("couldn't load tracks... Try again.")
    showStatus("Couldn't Load Tracks, try again!")
  }
}

async function loadArtists() {
  try {
    const token = getToken();
    const artists = await fetchTop(token, "artists");
    loadList(artists, "artists-list", createArtistCard)

  } catch (error) {
    console.log("Couldnt Load Artists... Try again");
    showStatus("Unable to load Artists... Try again!")
  }
}
function intializeDashboard() {
  if (document.getElementById("profile")) {
    loadProfile();
    loadTracks();
    loadArtists();
    setUpNav();
    setUpContactForm();
  }
}

function showSection(sectionId) {
  const selectedSection = document.querySelectorAll(".page-section")
  selectedSection.forEach((section) => {
    section.classList.add("hidden");
  })
  const rmvHidden = document.getElementById(sectionId);
    rmvHidden.classList.remove("hidden");
}


function setUpNav() {
  const nav = document.querySelectorAll(".nav-btn")
  nav.forEach((navBtn) => {
    navBtn.addEventListener("click", () => showSection(navBtn.dataset.section))
  });
}

// Contact Form functions -----------------------------------------------------------------------------------------
function getMesaages() {
  const saved = localStorage.getItem("contact-messages")
  if (saved === null) {
    return [];
  } else {
    return JSON.parse(saved);
  }
}

function saveMessages(message) {
  const messages = getMesaages();
  messages.push(message);
  localStorage.setItem("contact-messages", JSON.stringify(messages));
}

function validateMessage(name, email, text) {
  if (name === "") {
    return "Please enter your name";

  } else if (email === "") {

    return "Please enter your email";

  } else if (text === "") {

    return "Please write a message";

  } else if (!email.includes("@")) { 
    return "Please enter a valid email";

  } else {
    return "";
  }
  
}


function contactSubmit(event){
  event.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  const error = validateMessage(name, email, message);
  const feedback = document.getElementById("contact-feedback");
  if (error !== "") {
    feedback.textContent = error;
  } else {
    saveMessages({name,email,message, date: new Date().toLocaleString() })
    feedback.textContent = "Successfully Submitted feedback!";
    event.target.reset();
  }

}

function setUpContactForm() {
  document.getElementById("contact-form").addEventListener("submit", contactSubmit)
}
intializeDashboard();