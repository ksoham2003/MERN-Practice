# React Profile Card

A simple and responsive **Profile Card** application built with **React** to practice core React concepts such as components, props, JSX, component composition, and CSS Modules.

## 🚀 Features

* Display a user's profile picture
* Show user information (Name, Role, Bio)
* Display skills as reusable badges
* Social media links (GitHub, LinkedIn, Twitter)
* Reusable Contact Me button
* Modular and reusable component structure
* Responsive and clean UI using CSS Modules

## 🛠️ Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS Modules

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Avatar/
│   ├── Button/
│   ├── ProfileCard/
│   ├── Skill/
│   ├── SkillList/
│   ├── SocialLinks/
│   └── UserInfo/
│
├── data/
│   └── profile.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🧩 Components

### ProfileCard

Acts as the parent component and combines all child components.

### Avatar

Displays the user's profile image.

### UserInfo

Displays the user's name, role, and bio.

### SkillList

Iterates through the skills array and renders individual `Skill` components.

### Skill

Displays a single skill badge.

### SocialLinks

Displays clickable links to GitHub, LinkedIn, and Twitter profiles.

### Button

A reusable button component used for the **Contact Me** action.

## 📚 React Concepts Practiced

* Functional Components
* JSX
* Props
* Component Composition
* Rendering Lists with `map()`
* Passing Objects as Props
* Destructuring Props
* Reusable Components
* CSS Modules

## ▶️ Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd profile-card
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 📸 Application Preview

The application displays:

* Circular profile image
* Name, role, and bio
* Skill badges
* Social media links
* Contact Me button

## 🎯 Learning Outcome

This project demonstrates the fundamentals of React by building a reusable and maintainable UI using a component-based architecture. It serves as a beginner-friendly project for understanding how data flows through props and how small components can be composed to create larger interfaces.

## 🔮 Future Improvements

* Add Dark/Light Theme
* Integrate React Icons
* Add Download Resume button
* Fetch profile data from an API
* Add animations using Framer Motion
* Improve responsive design for mobile devices

## 👨‍💻 Author

**Soham Kadam**

Frontend Developer | MERN Stack Enthusiast

GitHub: [*ksoham2003*](https://github.com/ksoham2003)

LinkedIn: [*Soham Kadam*](https://www.linkedin.com/in/soham-kadam-00a746214/)
