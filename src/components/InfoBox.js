import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

const InfoBox = ({ title, cases, active, isGreen, total, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className={`infoBox ${active && 'infoBox--selected'}`}
    >
      <CardContent>
        <Typography className="infoBoxTitle" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBoxCases ${isGreen && 'infoBoxCases--green'}`}>
          {cases}
        </h2>
        <Typography className="infoBoxTotal" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
