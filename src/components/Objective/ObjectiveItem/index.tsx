import React from 'react';

import { Container } from './styles';
import arrowOrange from '../../../assets/system/target/history/arrow-orange.svg';

interface dataProps {
  title: string;
  subTitulo: string;
  content: string;
}

interface objetiveItemProps<T> {
  data: T;
  posicion: number;
}
const ObjectiveItem: React.FC<objetiveItemProps<dataProps>> = ({
  data,
  posicion,
}) => {
  return (
    <Container posiction={posicion}>
      <h1>{data.title}</h1>
      <p>{data.subTitulo}</p>
      <p className="body-objective">
        {data.content}
        <img src={arrowOrange} alt="" />
      </p>
    </Container>
  );
};

export default ObjectiveItem;
