import logo from './logo.svg';
import './index.css';
import React from 'react';

function App() {
  const [call,setCall]=React.useState()

  function answer(){
    setCall(prevState=>!prevState)
  }  
  return (
    <div className='bg-gradient-to-r from-lime-500 border-2 border-black h-80 w-80 rounded-xl mx-96 mt-40 p-10'>
      <div className='ml-20 font-bold'>McDonalds?</div>
      <div className='my-20 mx-20 border-black border-2 rounded-full p-6 bg-blue-500 hover:bg-blue-700 text-white font-bold hover:cursor-pointer' onClick={answer}>{call?"YES":"NO"}</div>
    </div>
  );
}

export default App;
