import React, { useCallback, useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';

import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Table, { subMenuItem } from '../../components/Table';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {}, []);
  const { id } = useParams();

  const [list, setList] = useState<subMenuItem[]>([]);
  const [listData, setListData] = useState<subMenuItem[]>([]);
  const [listSelect, setListSelect] = useState<subMenuItem[]>([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (id > 0) {
      try {
        api.get(`items/${id}`).then((response) => {
          setListData(response.data.subMenuItems);
          setList(response.data.subMenuItems);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [id]);

  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value);
      const filterEmail = listData.filter((email) => {
        return email.name.toLowerCase().includes(search.toLowerCase());
      });
      setList(filterEmail);
    },
    [list, setList, listData]
  );

  const handleRemoveSelect = useCallback(() => {
    /* list.filter((dataSelect) => {
      const index = list.findIndex((email) => {
        if (email.id === dataSelect.id) {
          return true;
        }
      });
      list.splice(index, 1);
    }); */

    setList(
      list.filter((data) => {
        if (!data.checked) return data;
      })
    );
  }, [list]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Pesquisar"
          onChange={(e) => handleChange(e)}
          name="username"
        />
        <div className="button-menu">
          <div>
            <Button>Atribuir</Button>
            <Button onClick={handleRemoveSelect}>Arquivar</Button>
            <Button>Agendar</Button>
          </div>
          <FiFilter size={20} />
        </div>
        {listSelect}
        {list && <Table list={list} setList={setList} />}
      </Form>
    </Container>
  );
};

export default Dashboard;
