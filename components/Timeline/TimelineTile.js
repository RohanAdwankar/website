import React from 'react';

import styles from '../../styles/pages/History.module.scss';

function TimelineTile(props) {
  return (
    <div className={styles['timeline-tile']}>
      <div className={styles['timeline-date']}>
        <p>{props.history.date}</p>
      </div>
      <div className={styles['timeline-info']}>
        <h3>{props.history.title}</h3>
        <p>{props.history.description}</p>
      </div>
    </div>
  );
}

export default TimelineTile;
