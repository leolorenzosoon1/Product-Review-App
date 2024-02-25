import React from 'react';
import styles from './Test.module.css'

// Define the props interface (if any)
interface HelloWorldProps {
  name: string;
}

// Define the functional component
const Test: React.FC<HelloWorldProps> = ({ name }) => {
    const {container, title, message} = styles
  return (
    <div className={container}>
      <h1 className={title}>Hello, {name}!</h1>
      <p className={message}>Welcome to the world of TypeScript and React!</p>
    </div>
  );
};

export default Test;
