import React, {
  useState,
  useCallback,
  useMemo,
  TableHTMLAttributes,
} from 'react';

import { Container } from './styles';
import Checkbox from '../checkbox';
import AvatarTable from '../AvatarTable';

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

interface openMenuProps {
  status: boolean;
  index: number;
}

const Table: React.FC<emailsProps> = ({ subMenuItems, ...rest }) => {
  const [isFocused, setIsFocused] = useState<openMenuProps>();
  const [isChecked, setIsChecked] = useState<openMenuProps[]>([]);

  const checkedItem = useMemo(
    () => !!isChecked.find((checked) => checked.status === true),
    [isChecked]
  );

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
        setIsChecked([...listCheck, { index, status: true }]);
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
                <div className="avatar-checkbox">
                  <Checkbox
                    type="checkbox"
                    onClick={() => handleChecked(index)}
                    className="checkbox"
                    name={email.id}
                    isVisible={
                      !(
                        (isFocused?.index === index && isFocused?.status) ||
                        checkedItem
                      )
                    }
                  />
                  <AvatarTable
                    height={50}
                    width={50}
                    index={index}
                    isFocused={isFocused}
                    isVisible={checkedItem}
                  >
                    {email.owner}
                  </AvatarTable>
                </div>
              </td>
              <td>
                <div>
                  <p className="flex ">{email.name}</p>
                  <p className="flex text-subject">{email.subject}</p>
                </div>
              </td>
              <td className="flex place-content-end">
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
