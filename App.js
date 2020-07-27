import React, { Component } from 'react';
import './App.css';
import {AppModal} from './AppModal';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      
      "ok": true,
      "members": [
        {
        "id": "W012A3CDE",
        "real_name": "Egon Spengler",
        "tz": "America/Los_Angeles",
        "activity_periods": [
        {
        "start_time": "Feb 1 2020  1:33PM",
        "end_time": "Feb 1 2020 1:54PM"
        },
        {
        "start_time": "Mar 1 2020  11:11AM",
        "end_time": "Mar 1 2020 2:00PM"
        },
        {
        "start_time": "Mar 16 2020  5:33PM",
        "end_time": "Mar 16 2020 8:02PM"
        }
        ]
        },
        {
        "id": "W07QCRPA4",
        "real_name": "Glinda Southgood",
        "tz": "Asia/Kolkata",
        "activity_periods": [
        {
        "start_time": "Feb 1 2020  1:33PM",
        "end_time": "Feb 1 2020 1:54PM"
        },
        {
        "start_time": "Mar 1 2020  11:11AM",
        "end_time": "Mar 1 2020 2:00PM"
        },
        {
        "start_time": "Mar 16 2020  5:33PM",
        "end_time": "Mar 16 2020 8:02PM"
        }
        ]
        }
        ]
      ,
        addModalShow :false
    }
  }
  // titleclicked(){
  //   alert("hi")
  // }
    render() {
    
      let addModalClose = () =>this.setState({addModalShow:false});
     return(
       <div>
       <h1>Users List
       </h1>
       {
         this.state.members.map((item)=>
         <div >
        
         <li> ID :{item.id} </li>        
         <li onClick={()=> this.setState({addModalShow:true})}>REAL NAME {item.real_name}</li>        
          <li>{item.tz}</li>
               
         <AppModal show={this.state.addModalShow} onHide={addModalClose}></AppModal>
         <ul>
         {item.activity_periods.map((sub)=>
          <div>
          <li>
          Start Time :{sub.start_time}</li>
        <li>   End Time :{sub.end_time}
          </li>
          </div>          
          )}
         </ul>
         </div>         
         )
       }
         </div>
     )
    
    }
  }

export default App