
# CHAT ME
This is a simple chat application built using React, Firebase, and Tailwind CSS. Users can log in and chat with each other in real-time.
## Features
- **User Authentication**: Users can sign up or log in using their email and password.
- **Real-time Chat**: Chat messages are updated in real-time using Firebase's real-time database.
- **Responsive Design**: The app is designed to work seamlessly on different screen sizes using Tailwind CSS.
## Technologies Used
 - React
- Firebase (Authentication, Realtime Database)
- Tailwind CSS
## 1. Getting Started
To run this application locally, follow these steps:
```bash
git clone https://github.com/sujanthapa01/Chatme.git
cd Chatme
npm install
npm run dev
```
## 2. Set up Firebase:
- Create a Firebase project on the Firebase Console.
- Enable Authentication and Realtime Database.
- Copy your Firebase configuration keys.
- Create a `.env` file in the root directory of the project and add your Firebase configuration keys: 
```bash
REACT_APP_FIREBASE_API_KEY=<your-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-app-id>
```
## 3. Run the application:
```bash
npm run dev
```

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any features or bug fixes.
