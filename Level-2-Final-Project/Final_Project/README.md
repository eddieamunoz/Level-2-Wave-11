# SpotiStats

This is my Spotify stat tracker built with HTML, CSS and JavaScript. You're able to log in with Spotify authentication to see your profile, top tracks and top artists!

## Requirments
- **API usage:** For the Spotify login, I plugged in their Authorization Code with PKCE and the Spotify API for profile, top tracks and top artists.
- **DOM manipulation:** The profile fields, avatar and track/artist cards are built within JavaScript.
- **Local storage:** saves the access token and the contact form messages.
- **Navigation:** You're able to switch between Profile, Tracks, Artists and Contact.
- **Contact form:** validates name, email and message with string methods, saves entries as a JSON array, shows a success message
- **Responsive design:** media query adjusts the layout for phones

## How to Run it locally

1. Open the project folder in VS Code and start Live Server.
2. Go to `http://127.0.0.1:5500/index.html` (use `127.0.0.1` isntead of `localhost`, because Spotify requires it).
3. Then Click **Login with Spotify**.

## Notes
Spotify apps in Dev mode only allow approved users to log in, so the live login may not work for other accounts unless I add you to the project. You must also have Spotify Premiuim for it to work. lastly, Spotify also rate-limits Dev mode apps, which blocked my app for about 24 hours during testing.