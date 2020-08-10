import React, { useCallback, useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';

import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import intl from 'react-intl-universal';
import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Table, { subDataItem } from '../../components/Table';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {}, []);
  const { id } = useParams();

  const [list, setList] = useState<subDataItem[]>([]);
  const [listData, setListData] = useState<subDataItem[]>([]);
  const [listSelect, setListSelect] = useState<subDataItem[]>([]);

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
          label={intl.get('input.labelFind')}
          onChange={(e) => handleChange(e)}
          name="username"
        />
        <div className="button-menu">
          <div>
            <Button>{intl.get('dashboard.attach')}</Button>
            <Button onClick={handleRemoveSelect}>
              {intl.get('dashboard.record')}
            </Button>
            <Button>{intl.get('dashboard.schedule')}</Button>
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
