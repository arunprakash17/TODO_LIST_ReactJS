import React from 'react';
import logo from './toploho.png';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  addItem(todoValue){
    if(todoValue!== ""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list=[... this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }
  }
  deleteItem(id){
    const list=[...this.state.list];
    const updatelist=list.filter(item => item.id!=id);

    this.setState({
      list:updatelist
    })
  }
  updateInput(input){
    this.setState({newItem:input});
  }
  render(){
    return(
      <div>
        <img src={logo} width='100' height='100' className="logo"/>
        <h1 className="app-title">ToDo App</h1>
       <div className="container">
          Add Item ....
          <br/>
            <input type="text"
                name=""
                className="input-text"
                placeholder="Write a Todo"
                required
                value={this.state.newItem}
                onChange={e=>this.updateInput(e.target.value)}
            />
            <button 
                className="add-btn"
                onClick={()=>this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
            >
             Add ToDo</button>
             </div>
        <div className="list">
            {this.state.list.map(item =>{
              return(
              <li key={item.id}>
                <input
                    className="checkbox"
                    type="checkbox"
                    name="idDone"
                    onClick={()=>{}}
                />
                <label>
                    {item.value}</label>
                <button
                    className="btn"
                    onClick={()=> this.deleteItem(item.id)} 
                >Delete</button>
              </li>
            )
          })}
          <li>
            <input type ="checkbox" name=""/>
              <label>Create a ToDo list</label>
            <button className="btn">Delete</button>
          </li>
        </div>
      </div>
    )
  }
}


export default App;
