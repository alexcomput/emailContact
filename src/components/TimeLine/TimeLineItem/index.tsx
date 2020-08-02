import React from 'react';

import { FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Footer } from './styles';

interface dataProps {
  date: string;
  title: string;
  body: string;
}

interface timeLineProps<T> {
  data: T;
}

const TimeLineItem: React.FC<timeLineProps<dataProps>> = ({ data }) => {
  return (
    <Container>
      <div className="timeline-item-content">
        <time>{data.date}</time>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.body}</p>
        <div className="circle" />
        <Footer>
          <FiEyeOff />
          <Link to="#/">Ver Mais</Link>
        </Footer>
      </div>
    </Container>
  );
};

export default TimeLineItem;
