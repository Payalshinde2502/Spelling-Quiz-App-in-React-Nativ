✨ Features

✅ Onboarding Screen – Welcome screen with a motivational quote and "Start Quiz" button.
✅ Level Selection – Choose from Easy, Medium, or Hard levels.
✅ Quiz Screen – Each level contains 3 randomized questions.
✅ Timer – 10-second countdown for each question.
✅ Animated Answer Selection – Correct answers glow green, wrong answers glow red.
✅ Result Screen – Displays the final score and a "Play Again" option.
✅ Minimal & Professional UI – Gradient backgrounds, smooth transitions, and a polished look.

📂 Folder Structure

/game  
│── /assets (Images, Icons, Backgrounds)  
│── /components (QuizCard, Timer, Button, Shuffle logic)  
│── /data (Questions dataset)  
│── /screens (Onboarding, LevelSelection, QuizScreen, ResultScreen)  
│── /utils (Helper functions)  
│── App.js  
│── navigation.js (React Navigation setup)  
│── package.json

🛠️ Tech Stack

React Native (CLI)
React Navigation
Tailwind CSS (for styling)
Lottie Animations
Async Storage (optional for future enhancements)

🚀 Installation & Run

git clone https://github.com/yourusername/ashdip-spelling-quiz.git  
cd ashdip-spelling-quiz  
npm install  
npx react-native run-android  # For Android  
npx react-native run-ios  # For iOS

📌 Future Improvements

🔹 Add a global leaderboard using Firebase
🔹 Include more quiz categories
🔹 Implement  background music
