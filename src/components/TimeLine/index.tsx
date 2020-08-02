import React from 'react';

import TimeLineItem from './TimeLineItem';
import dataInfo from './data.js';

import { Container } from './styles';

const TimeLine: React.FC = () => {
  return (
    <Container>
      {dataInfo.map((data, index) => {
        const id = index;
        return <TimeLineItem data={data} key={id} />;
      })}
    </Container>
  );
};

export default TimeLine;
