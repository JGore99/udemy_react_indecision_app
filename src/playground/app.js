//import './utils.js';
//import subtract, { square, add } from './utils.js'; //default goes in front of curly braces

//console.log('app.js is running');
//console.log(square(4));
//console.log(add(100, 23));
//console.log(subtract(100, 23)); //this is the default

//import isSenior, { isAdult, canDrink } from "./person";

//console.log(isAdult(18));

//console.log(canDrink(18));

//console.log(isSenior(18));

import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: [],
      };
    }
    componentDidMount() {
      //REACT LIFECYCLE
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        //Do nothing
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      //usefulf for determining when data changed
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    }
  
    componentWillUnmount() {
      console.log("unmount");
    }
  
    handleDeleteOptions() {
      /* this.setState(() => {
        return {
          options: [],
        };
      }); */
  
      this.setState(() => ({ options: [] })); // same as above, just shorter
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option),
      }));
    }
  
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
  
      /*this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),
        };
      });*/
    }
    render() {
      const title = "Indecision";
      const subtitle = "Put your life in the hands of a computer";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    };
  };
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}{" "}
        {/*FUNCTIONAL CONDITIONING. Only show if...*/}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: "some default",
  };
  
  /*class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  */
  
  const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  };
  
  /*class Action extends React.Component {
    render() {
      return (
        <div>
          <button
            onClick={this.props.handlePick}
            disabled={!this.props.hasOptions}
          >
            What should I do?
          </button>
        </div>
      );
    }
  }
  */
  
  const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && (
          <p>Please add an option to get started!</p>
        )}
        {props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  };
  
  /*class Options extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {this.props.options.map((option) => (
            <Option key={option} optionText={option} />
          ))}
        </div>
      );
    }
  }
  */
  
  const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          Remove
        </button>
      </div>
    );
  };
  
  /*class Option extends React.Component {
    render() {
      return <div>Option: {this.props.optionText}</div>;
    }
  }
  */
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined,
      };
    }
    handleAddOption(e) {
      e.preventDefault(); //prevents default form submission
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(() => ({ error }));
      if (!error) {
        e.target.elements.option.value = "";
      }
      /*this.setState(() => {
        return { error };
      });*/
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  

  class OldSyntax {
    constructor() {
      this.name = "Mike";
    }
  }
  
  const oldSyntax = new OldSyntax();
  console.log(oldSyntax);
  
  // ---- 
  
  class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
      return `Hi. My name is ${this.name}`;
    }
  }
  
  const newSyntax = new NewSyntax();
  const newGetGreeting = newSyntax.getGreeting;
  console.log(newGetGreeting());