import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const arr = [
    [1,0,0],
    [0,0,0],
    [0,2,1]
  ]

const tds = arr.map((i, n)=><tr>{i.map((k,l)=><td>{ 
  
  a = '';

  switch (k) {
    case 0:
      a = ''
      break;
    case 1: 
      a = 'x';
      break;
    case 2: 
      a = 'o'
      default:
      break;
  }
   return a;
  
  }
  </td>)}</tr>)

  return (
    <div className="App">
     {tds}
    </div>
  );
}

export default App;
