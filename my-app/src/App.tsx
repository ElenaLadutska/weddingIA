import React from 'react';
import Timer from './components/Timer';
import RsvpForm from './components/RsvpForm';
import Header  from './components/Header';

import styles from './App.module.css';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Calendar />
      
      <Timer />

      <RsvpForm />
    </div>
  );
}

export default App;
