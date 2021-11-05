import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      newItem: "",
      list: [],
      id:1
    }
  }

  updateItem(key, value){
    //Update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //Creating item with unique id
    const newItem = {
    id: this.state.id,
    value: this.state.newItem.slice()
    };

    //Copy of current list of items
    const list = [...this.state.list];
    
    //add new item to list
    list.push(newItem);
    var id=this.state.id;
    id=id+1;

    localStorage.setItem('Item', newItem);

    //Update state with new list and reset newItem input
    this.setState({
      list,
      newItem:"",
      id
    });
  
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    
    
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        Hello World!!!
        
        <div>
          Add an Item...
          <br/>
          <input 
            type = "text"
            placeholder = "Type your item here..."
            value = {this.state.newItem}
            onChange = {e => this.updateItem("newItem", e.target.value)}
          />
          <button 
            onClick = {() => this.addItem()}
          >
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return(
                <li key = {item.id}>
                  {item.value}
                  <button
                    onClick = {() => this.deleteItem(item.id)}
                  >X</button>
                </li>
              )
            })}
          </ul>  
        </div>
      </div>
    );
  }
}

export default App;
