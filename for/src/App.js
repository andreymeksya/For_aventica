import React from 'react';
import Auth from './components/auth';
import Play from './components/play';

class App extends React.Component {
  state = {
    isAuth: false,
    name: "",
  }
  updateName = (value) => {
    this.setState({ name: value })
    this.setState({isAuth: true })
  }

  updateFirstMove = (value) => {
    this.setState({ firstMove: value })
  }
    render() {
      if(this.state.isAuth === false){
        return(
          <div>
            <Auth updateName = {this.updateName}/>
          </div>
        )
      }else{
        return (
          <div className="divPlay">
            <Play name = {this.state.name} firstMove={this.state.firstMove}/>
          </div>
        );
      }
      
    }
}

export default App;
