import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

const InfoBox = ({ title, cases, total, onClick }) => {
  return (
    <Card onClick={onClick} className="infoBox">
      <CardContent>
        <Typography className="infoBoxTitle" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBoxCases">{cases}</h2>
        <Typography className="infoBoxTotal" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
