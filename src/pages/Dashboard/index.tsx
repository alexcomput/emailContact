import React, {
  useCallback,
  useEffect,
  useState,
  TableHTMLAttributes,
} from 'react';

import { FiFilter } from 'react-icons/fi';

import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { Container, PainelB } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Table, { emailsProps } from '../../components/Table';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => { }, []);
  const { id } = useParams();
  const [list, setList] = useState<emailsProps>();

  useEffect(() => {
    if (id > 0) {
      try {
        api.get(`items/${id}`).then((response) => {
          setList(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [id]);

  return (
    <Container>
      <PainelB>
        <Form onSubmit={handleSubmit}>
          <Input label="Pesquisar" name="username" />
          <div className="button-menu">
            <div>
              <Button>Atribuir</Button>
              <Button>Arquivar</Button>
              <Button>Agendar</Button>
            </div>
            <FiFilter size={20} />
          </div>
          {list && <Table subMenuItems={list?.subMenuItems} />}
        </Form>
      </PainelB>
    </Container>
  );
};

export default Dashboard;
