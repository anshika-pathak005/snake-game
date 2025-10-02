# 🐍 Snake Game

A classic Snake Game built with HTML, CSS, and JavaScript, created purely for fun and to practice working with canvas rendering, keyboard events, and game loops in JavaScript.
### 🔗 [Live Demo](https://nimble-tanuki-a4ffe0.netlify.app/)

## ✨ Features

- 🎮 Playable on **desktop (arrow keys)** and **mobile (swipe controls)**
- 🍎 Random food generation — snake grows when it eats
- 🧮 Real-time score display with **high score saved** in localStorage
- 💥 Game over detection when hitting walls or itself
- 🔄 **Restart button** to quickly play again
- 📱 Mobile-friendly instructions shown on screen

## 📂 Project Structure

```
snake-game/
├── index.html   # Canvas and basic game container
├── style.css    # Page styling
└── index.js     # Game logic (snake movement, food, scoring)
```

## 🚀 Installation / Usage

1. Clone or download this repository.  
2. Open `index.html` in any modern browser.  
3. Use Arrow Keys (↑ ↓ ← →) to control the snake.  
4. Eat the red squares to grow longer and increase your score.  
5. Try to beat your high score — it’s stored even if you refresh the page.  

## 🎥 Demo
<img src="./snake-game.gif" alt="Demo" width="700">

## 💡 What I Learned

- How to draw and update a game board using `<canvas>` and `context.fillRect()`  
- Using keyboard events (`keyup`) to control movement  
- Managing game state with arrays for snake body segments  
- Storing and updating high scores locally using `localStorage`  
- Creating game loops with `setInterval()` for constant updates  

## 🙌 Acknowledgments

- 🎥 Tutorial Reference: YouTube tutorial on building Snake Game in JS  
- 💻 Code: Fully written by me following the tutorial step by step (no extra features added)  
