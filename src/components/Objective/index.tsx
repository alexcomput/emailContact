import React from 'react';

import { Container } from './styles';
import ObjcetiveItem from './ObjectiveItem';
import dataInfo from './data.js';

const ObjectiveTarget: React.FC = () => {
  return (
    <Container>
      {dataInfo.map((data, index: number) => {
        const id = index;
        return <ObjcetiveItem data={data} posicion={id} key={id} />;
      })}
    </Container>
  );
};

export default ObjectiveTarget;
