import React, { TableHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container, AvatarTable } from './styles';

interface subMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

export interface emailsProps extends TableHTMLAttributes<HTMLTableElement> {
  subMenuItems: subMenuItem[];
}

const Table: React.FC<emailsProps> = ({ subMenuItems, ...rest }) => {
  return (
    <Container {...rest}>
      <tbody>
        {subMenuItems.map((email, index) => {
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
