import React from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchCarts } from '../../redux/Cart/asyncActions';

import { addOffset } from '../../redux/Cart/slice';

import CartGame from '../CartGame/CartGame';

import styles from './Calendar.module.scss';
import Skeleton from '../Skeleton/Skeleton';

const Calendar: React.FC = (  ) => {
    let { offset, items, status, total } = useSelector((state: RootState) => state.cartReducer);

    let dispatch = useAppDispatch();
    const { ref, inView } = useInView({
        threshold: 1,
        onChange(inView) {
          if (inView) {
            dispatch(addOffset());
          }
        },
    });
  
    React.useEffect(() => {
      if (offset <= total) {
        dispatch(fetchCarts(offset));
      }
    }, [offset]);

  return (
    <>
    {
      status === 'error' ? <div style={{fontSize: "60px", marginTop: "200px", textAlign: "center"}}>Ошибка загрузки</div> : (
        <div className={styles.calendarContainer}>
          {
            items.map((item, index) => <CartGame key={item._id} {...item} />)
          }
          {
            status === 'loading' ? [...new Array(10)].map((item, index) => <Skeleton key={index} />) : null
          }
        </div>
      )
    }
    <div style={{width: "100%", height: "20px"}} ref={ref} ></div>
    </>
  );
};

export default Calendar;