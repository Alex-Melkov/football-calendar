import React from 'react';

import { IItems } from '../../redux/Cart/types';
import styles from './CartGame.module.scss';


const CartGame: React.FC<IItems> = ( {_id, tourNumber, teamHome, teamAway, scoreFtHome, scoreFtAway, stadium, date} ) => {

  const dateСonversion = () => {
    let dateMatch: Date = new Date( Date.parse(date));

    let year = String(dateMatch.getFullYear());
    let month = String(dateMatch.getMonth());
    let day = String(dateMatch.getDate());

    if (Number(month) < 10) {
      month = '0' + month
    }

    if (Number(day) < 10) {
      day = '0' + day
    }

    return `${day}.${month}.${year}`
  };


  let teamHomeLogo = `https://footballista.ru/api/img/logos/${teamHome.logo}-middle.png?logoId=${teamHome.logoId}`;
  let teamAwayLogo = `https://footballista.ru/api/img/logos/${teamAway.logo}-middle.png?logoId=${teamAway.logoId}`;

  return (
    <div className={styles.cartGameContainer}>
        <div className={styles.tourNumber}>Номер тура: {tourNumber}</div>
        <div className={styles.horizontal}></div>
        <div className={styles.teamsInfo}>
            <div className={styles.teamBlock}>
                <div className={styles.logoTeamHome}>
                  <img src={teamHomeLogo} width="50" height="50" alt="TeamLogo" />
                </div>
                <div className={styles.teamName}>Команда хозяев: <br /><span>{teamHome.name}</span></div>
              <div className={styles.logoId}>LogoId: <b>{teamHome.logoId}</b></div>
            </div>
            <div className={styles.teamBlock}>
              <div className={styles.logoTeamAway}>
                <img src={teamAwayLogo} width="50" height="50" alt="TeamLogo" />
              </div>
              <div className={styles.teamName}>Команда гостей: <br /><span>{teamAway.name}</span></div>
              <div className={styles.logoId}>LogoId: <b>{teamAway.logoId}</b></div>
            </div>
        </div>
        <div className={styles.horizontal}></div>
        <div className={styles.scoreBlock}>
          <div className={styles.scoreTitle}>Счёт</div>
          <div className={styles.score}>Количество голов, забитых хозяевами: <b>{scoreFtHome}</b></div>
          <div className={styles.score}>Количество голов, забитых гостями: <b>{scoreFtAway}</b></div>
        </div>
        <div className={styles.horizontal}></div>
        <div className={styles.dateAndStadium}>
          <div className={styles.dateAndStadiumTitle}>Дата и стадион</div>
          <div className={styles.date}>Дата матча: <b>{dateСonversion()}</b></div>
          <div className={styles.stadium}>Название стадиона: <span>{stadium === undefined ? 'Неизвестно' : stadium.name}</span></div>
        </div>
    </div>
  );
};

export default CartGame;