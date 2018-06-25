import React from 'react';
import ReactDOM from 'react-dom';
class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color:'green'
    };
  }

  mouseOverHandler(e){
    this.setState({color:'blue'});
  }

  mouseOutHandler(e){
    this.setState({color:'green'});
  }

  render() {
    return (
      <div style={{color:this.state.color,fontSize:'20px',fontWeight:700}}
            onMouseOver={this.mouseOverHandler.bind(this)}
            onMouseOut={this.mouseOutHandler.bind(this)}
      >這是文字  
      </div>
    
    );
  }
}

window.addEventListener('load', () =>{
  let element = <TodoApp />;
  ReactDOM.render(element,document.body);
});