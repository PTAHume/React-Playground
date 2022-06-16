import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
//import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//const App = ({ title }) => <div className="header">{title}</div>;

class Car extends React.Component {
  render(){
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Car/>
      </div>
    )
  }
}

root.render(
  <StrictMode>
    <App title="The GitHub Cards App" />
  </StrictMode>
);
