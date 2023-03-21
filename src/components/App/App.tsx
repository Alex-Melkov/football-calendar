import React from 'react';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

const App: React.FC = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Calendar />
      <Footer />
    </div>
  );
};

export default App;
