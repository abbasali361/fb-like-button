import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('')
  const handleLike = () => {
    const color =likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  const [users, setUsers] = useState([]);
  const [singleUsers, setSingleUsers] = useState({});
  const [randomUsers, setRandomUsers] = useState({});
  useEffect ( () => {
    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data))
    //singleUsers
    fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUsers(data))

    // randomUsers
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUsers(data.results[0]));
  }, [])
  return (
    <div >
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color ={likeColor}></ThumbUpAltIcon>
      {/* <ThumbUpAltIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color ={likeColor}></ThumbUpAltIcon> */}
    
    <h1>Name: {singleUsers.name}</h1>
    <h2> Random Gender: {randomUsers.gender}</h2>
    <h2> Random Email: {randomUsers.email}</h2>
    {/* <h2> Random Name: {randomUsers.name && randomUsers.name.first}</h2> */}
    <h2> Random Name: {randomUsers.name ?.first}</h2>

    {
      users.map(user => <li>{user.name}</li>)
    }
    </div>
  );
}

export default App;
