import React from 'react';
import Timer from './components/Timer';
import Header  from './components/Header';
import Calendar from './components/Calendar';
import { Programm } from './components/Programm';
import { Details } from './components/Details';
import { Channel } from './components/Channel';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Calendar />
      
      <Timer />

      <Programm />

      <Details />

      <Channel />
    </div>
  );
}

export default App;
