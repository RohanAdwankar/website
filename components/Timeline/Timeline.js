import React from 'react';

import styles from '../../styles/pages/History.module.scss';
import TimelineTile from './TimelineTile';


function Timeline(props) {
  return (
    <div id={styles.timeline}>
      { props.history.map(history => <TimelineTile key={history.title} history={history} />) }
    </div>
  );
}

export default Timeline;
