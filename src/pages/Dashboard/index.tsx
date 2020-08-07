import React, {
  useCallback,
  useEffect,
  useState,
  TableHTMLAttributes,
} from 'react';
import { FiFilter } from 'react-icons/fi';

import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Table, { emailsProps } from '../../components/Table';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => { }, []);
  const { id } = useParams();
  const [list, setList] = useState<emailsProps>();
  const [search, setSearch] = useState('');

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


  const handleChange = useCallback(({ e }) => {
    setSearch(e.target.value)
    console.log(search)
    const filterEmail = list?.subMenuItems.filter(email => {
      return email.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filterEmail);
    setList(list);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Input label="Pesquisar" onChange={e => handleChange(e)} name="username" />
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
    </Container>
  );
};

export default Dashboard;
