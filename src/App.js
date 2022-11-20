import React from 'react';
import './App.css';
import { Counter } from './components/misc/Counter/Counter';

const App = () => {
  return (
    <div className='main-container'>
      <h1 className='header'>Hello React</h1>
      <p>This is a React application created from scratch using Webpack and Babel.</p>
      <p>The Webpack loaders being used are:</p>
      <ul>
        <li>babel-loader</li>
        <li>style-loader</li>
        <li>css-loader</li>
      </ul>
      <Counter initialCount={10} />
    </div>
  );
};


export default App;