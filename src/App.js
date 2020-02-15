import React from 'react';

function Food({fav}){
  // console.log(props.fav);
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello~.~</h1>
      <Food fav = 'kimchi' />
      <Food fav = 'Gongcha' />
      <Food fav = 'McDonalds' />
    </div>
  );
}

export default App;
