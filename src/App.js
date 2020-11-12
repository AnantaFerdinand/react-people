// import logo from './logo.svg';
import './App.css';
import React from 'react';

const sortByPower = (a, b) => {
  return b.power - a.power;
};
// const UserInfo = (props) => {
//   function getUserInfo(username){
// }
// getUserInfo('John Doe');
// return (
// <>
// <p>Username: {props.username}</p>
// <p>Active: {props.active}</p>
// {/* <UserInfo username={'John Doe'}/> */}
// </>
//  ); 
// };

const List = (props) => {
  return(
<>
  <h1>React People!</h1>
  <ul className="List">
   {props.data.sort(sortByPower).map((person)=>(
     <li key={person.name} className="list-item">
       <div className="list-item-image-container">
         <img src={person.thumbnail} />
         <span className="list-item-name">{person.name} (Power:{''}
          <span className="list-item power">{person.power}</span>)
         </span>
       </div>
     </li> 
  ))};
  </ul>
  </>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    } 
 }
 componenDidMount() { 
   fetch('Some API URL')
   .then(response => response.json())
   .then(userName => this.setState({userName}));
   console.log("Komponen di Mount");
  }
  
render (){
  const human = [
    {
    name: "Kuririn",
    thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
    power: 10
    },

    {
      name: "Bulma",
      thumbnail:'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
      power: 3
    },

    {
      name: "Chi-chi",
      thumbnail:'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
      power: 30
      },
   ];
 
return(
    <div className="App">
    <List data ={human}/>
    <p>Name:{this.state.userName}</p>
    </div>
    // {/* <h1>User Information</h1>
    // <UserInfo username={'John Doe'} active={true}/> */}
    // 
    // {/* <List data ={saiyan}/> */}
      );
  };
};

export default App;
