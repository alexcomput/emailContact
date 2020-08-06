import React, { useState, useCallback, TableHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container, AvatarTable } from './styles';
import Input from '../Input';
import Checkbox from '../checkbox';

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

interface opemMenuProps {
  status: boolean;
  index: number;
}

const Table: React.FC<emailsProps> = ({ subMenuItems, ...rest }) => {
  const [isFocused, setIsFocused] = useState<opemMenuProps>();
  const [isChecked, setIsChecked] = useState<opemMenuProps[]>([]);

  const handleTableOver = useCallback((index: number) => {
    setIsFocused({ index, status: true });
  }, []);

  const handleChecked = useCallback(
    (index: number) => {
      const listCheck = isChecked.filter((check) => {
        if (check.index === index) check.status = !check.status;
        return check;
      });

      const conf = listCheck.filter((check) => check.index === index);

      if (conf.length === 0) {
        const checkNew: opemMenuProps = { index, status: true };
        setIsChecked([...listCheck, checkNew]);
      } else {
        setIsChecked([...listCheck]);
      }
    },
    [isChecked]
  );

  const handleTableOut = useCallback(
    (index: number) => {
      setIsFocused({ index, status: false });
    },
    [isFocused]
  );

  return (
    <Container {...rest}>
      <tbody>
        {subMenuItems.map((email, index: number) => {
          return (
            <tr
              key={index}
              onMouseOver={() => handleTableOver(index)}
              onMouseOut={() => handleTableOut(index)}
            >
              <td className="td-first">
                <Checkbox
                  type="checkbox"
                  onClick={() => handleChecked(index)}
                  className="checkbox"
                  name={email.id}
                  isVisible={
                    !(
                      (isFocused?.index === index && isFocused?.status) ||
                      isChecked.find((cheched) => cheched.index === index)
                        ?.status
                    )
                  }
                />
                <AvatarTable
                  height={50}
                  width={50}
                  index={index}
                  isFocused={isFocused}
                  isCheched={isChecked}
                >
                  {email.owner}
                </AvatarTable>
              </td>
              <td>
                <div>
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
                        <AvatarTable
                          key={index}
                          index={index}
                          height={30}
                          width={30}
                        >
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
