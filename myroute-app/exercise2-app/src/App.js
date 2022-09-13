import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">

     <WelcomeComponent name="Codetrain GH"/>
    </div>
  );
}

export default App;


class WelcomeComponent extends Component {
  render(props) {
    return (
      <h1>“{this.props.name} is awesome, react works!!!!”</h1>
    )
  }
}

