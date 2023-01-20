import * as React from 'react';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: 'Stepan', 
      age: 25,
      complited: false
    }
  }

  changeUserInform = () => {
    this.setState({
        name: 'Mykola',
        age: 30,
        complited: !this.state.complited
      })
  }

  render() {
    const {name, age, complited} = this.state;

    return (
      <>
      <div>
        {complited ? <p>Name: {name}, Age: {age}</p> : null}
        <button onClick={this.changeUserInform}>{complited ? 'Hide' : 'Show'}</button>
      </div>
      </>
    );
  };
};

export default App;