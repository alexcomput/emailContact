import React, { useState, useCallback, TableHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container, AvatarTable } from './styles';
import Input from '../Input';

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
  const [isFocused, setIsFocused] = useState(false);

  const handleTableFocus = useCallback(() => {
    console.log(isFocused);
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container {...rest}>
      <tbody>
        {subMenuItems.map((email, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  name={email.id}
                  id={email.id}
                  type="checkbox"
                  className="checkbox"
                  onBlur={handleInputBlur}
                />

                <AvatarTable height={50} width={50} isFocused={isFocused}>
                  {email.owner}
                </AvatarTable>
              </td>
              <td>
                <div onFocus={handleTableFocus}>
                  <p>{email.name}</p>
                  <p className="text-subject">{email.subject}</p>
                </div>
              </td>
              <td>
                <div className="time-users">
                  <p>Hoje as 11</p>
                  <p>2 horas</p>
                  <div className="circle-users">
                    {email.users.map((user, index) => {
                      return (
                        <AvatarTable key={index} height={30} width={30}>
                          {user}
                        </AvatarTable>
                      );
                    })}
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
};

export default Table;
