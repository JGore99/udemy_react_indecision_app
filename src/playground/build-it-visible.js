const renderContent = () => {
  const content = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{!wasClicked ? "Show Details" : "Hide Details"}</button>
      {wasClicked && (
          <p>"Hey. These are some details you can see!"</p>
          )}
    </div>
  );

  ReactDOM.render(content, appRoot);
};

let wasClicked = false;

function toggleDetails() {
  if (wasClicked) {
    wasClicked = false;
    console.log(wasClicked)
  } else {
    wasClicked = true;
    console.log(wasClicked)
  }
  renderContent();
}

const appRoot = document.getElementById("app");

renderContent();
