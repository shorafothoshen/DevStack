# DevStack-Technologies Stack Builder

## Description

DevStack is a modern, responsive web app that helps developers explore popular web technologies and build their own personalized tech stack. Users can browse a curated collection of frontend, backend, database, and DevOps tools, view details like difficulty level and rating, and add their favorites to a "Your Stack" panel -all with smooth toast notifications and a clean, gradient-themed UI.

## Technologies Used

- **React.js**
- **Tailwind CSS** + **DaisyUI**
- **React Icons**
- **Toastify**
- **JSON Local data**
- **Vite**

## Key Features

-**Browse & Explore Technologies**-A responsive grid of technology cards loaded dynamically from a JSON file.

-**Build Your Own Stack**-Add technologies to a personal "Your Stack" panel with a single click. Duplicate additions are blocked, and buttons update instantly to show "✓ Added to Stack." Remove individual items or clear the entire stack at once.

-**Real-Time Feedback & Loading States**-Toast notifications confirm every add/remove action, while a spinner shows while technology data is being fetched.

## Live Link
  https://dev-stack-ruddy.vercel.app/

## React Concepts Used in This Project

<h3>1.What is JSX, and why is it used in React?</h3><br>
Ans:JSX stands for JavaScript XML.JSX way to write HTML, like code inside JavaScript.<br>
React uses it to make building websites easier. Browsers cannot read JSX directly, so tools automatically convert it into standard JavaScript.
<br>
<br>
<h3>2.What is the difference between props and state?</h3><br>
Ans:In react, the core difference in that <br>
*props:*are used to pass data from parent component down to a child component<br>
*state*:is used to manage data locally within the component itself.<br><br>
<h3>3.What does the useState hook do, and where did you use it in this project?
</h3><br>Ans:The useState hook lets your React app remember and update information on the screen. When the data changes, React automatically refreshes the page to show the new look.<br><br>
<h3>4.What does the useEffect hook do, and why did you need it to load the JSON data?</h3><br>Ans:The useEffect hook performs side effects like fetching data immediately after a component loads on the screen. It is required here to safely load the JSON data only once when the app opens, preventing an infinite re-rendering loop that would crash your application.<br><br>
<h3>5.Why does every item in a .map() list need a unique key prop?</h3><br>
Ans:The key prop gives each item a unique identity so React knows exactly which one changed, was added, or got removed. It allows React to update only that specific item instantly, making your application faster and preventing display bugs.<br><br>
<h3>6.What is conditional rendering? Show one place you used it (example: the empty stack message).</h3><br>
Ans:Conditional rendering means showing different user interface components based on whether a specific condition is true or false<br>
example:<br>
<p className="text-gray-500">
          {isCount === 0
            ? "No technologies selected yet."
            : `${isCount} Technology Selected`}
        </p>
<br>
<br>
<h3>7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?</h3><br>
Ans:Props pass data down from parent to child, while callback functions send data back up from child to parent.<br>
-Parent to Child: The parent sends data down as custom attributes (called props) which the child reads instantly.
-Child to Parent: The parent sends a function down to the child; when the child runs this function, it passes data back up as an argument.