import React from 'react';
import PropTypes from 'prop-types';
import style from './RoundProgressBar.module.css';

const RoundProgressBar = ({ percentage }) => {
  const degrees = (percentage * 180) / 100;
  const cssProperties = { '--degrees': `${degrees}deg` };
  const maskFull = `${style.mask} ${style.full}`;
  const maskHalf = `${style.mask} ${style.half}`;
  return (
    <div className={style.row}>
      <div className={style.column}>
        <div className={style.circleWrap} style={cssProperties}>
          <div className={style.circle}>
            <div className={maskFull}>
              <div className={style.fill} />
            </div>
            <div className={maskHalf}>
              <div className={style.fill} />
            </div>
          </div>
          <div className={style.insideCircle} />
        </div>
      </div>
      <div className={style.column}>
        <div className={style.textPercentage}>
          {percentage}
          %
          <p className={style.complete}>Complete</p>
        </div>
      </div>
    </div>
  );
};

RoundProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default RoundProgressBar;
