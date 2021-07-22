console.log("App.js is running");

// JSX - Javascript XML

const app = {
  title: "Indecision App",
  subtitle: "Do you like the big butts?",
  options: [],
};

function showOptions(options) {
  //alternative to inline if statement. Both work.
  if (options.length > 0) {
    return "Here are your options";
  } else {
    return "No options for you";
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderItUp();
  }
};

const removeAll = () => {
  app.options = [];
  renderItUp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
};

const numbers = [55, 101, 10001];

const renderItUp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      {/*
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
      */}
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

renderItUp();
