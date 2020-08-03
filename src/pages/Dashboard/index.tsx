import React, { useCallback, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiMoreVertical, FiFilter } from 'react-icons/fi';

import { Form } from '@unform/web';
import {
  Container,
  PainelA,
  Header,
  Avatar,
  AvatarTable,
  PainelB,
} from './sytles';

import Menu from '../../components/Menu';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Table from '../../components/Table';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <PainelA>
        <Header>
          <Avatar>
            <Link to="#/"> OA</Link>
          </Avatar>
          <div className="favorite">
            <div>
              Favorito
              <FiMoreVertical size={15} />
            </div>
            <strong>30</strong>
          </div>
        </Header>
        <Menu />
      </PainelA>
      <PainelB>
        <Form onSubmit={handleSubmit}>
          <Input label="Pesquisar" name="username" />

          <div className="button-menu">
            <div>
              <Input type="checkbox" className="checkbox" name="dde" />

              <Button>Atribuir</Button>
              <Button>Arquivar</Button>
              <Button>Agendar</Button>
            </div>
            <FiFilter size={20} />
          </div>

          <Table />
        </Form>
      </PainelB>
    </Container>
  );
};

export default Dashboard;
