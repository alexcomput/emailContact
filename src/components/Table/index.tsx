import React, { TableHTMLAttributes, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

import { Container, AvatarTable } from './styles';

export interface emailDetailsProps {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: any[];
}

interface emailsProps {
  id: number;
  subMenuItems: emailDetailsProps[];
}

const Table: React.FC = ({ ...rest }) => {
  const [list, setList] = useState<emailsProps>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`items/${id}`).then((response) => {
        setList(response.data);
      });
    }
  }, [list]);

  return (
    <Container {...rest}>
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
    </Container>
  );
};

export default Table;
