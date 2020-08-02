import React, { useCallback, useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
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
import api from '../../services/api';

interface subMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: any[];
}
interface emails {
  id: number;
  subMenuItems: subMenuItem[];
}
const Dashboard: React.FC = () => {
  const [paramConsult, setParamConsult] = useState(0);
  const [list, setList] = useState<emails>();
  const { id } = useParams();

  useEffect(() => {
    setParamConsult(id);

    api.get(`items/${id}`).then((response) => {
      setList(response.data);
    });
  }, [list]);

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

          <table>
            <tbody>
              {list?.subMenuItems.map((email, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <AvatarTable>
                        <Link to="#/">
                          {email.name?.split(' ', 2)[0]?.slice(0, 1) +
                            email.name?.split(' ', 2)[1]?.slice(0, 1)}
                        </Link>
                      </AvatarTable>
                    </td>
                    <td>{email.name}</td>
                    <td>{email.subject}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Form>
      </PainelB>
    </Container>
  );
};

export default Dashboard;
