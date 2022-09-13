import { Component } from 'react';
import './App.css';

//ES6 Arrow functional component//

// const App= () => {
//   return (
//     <div className="App">
//      <h1>“Codetrain is awesome, react works!!!!” </h1>
//     </div>
//   );
// }

//Class Component//
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>“Codetrain is awesome, react works!!!!” </h1>
      </div>
    );
  }
}
export default App;
