import React, {
  useState,
  useCallback,
  useMemo,
  TableHTMLAttributes,
  useEffect,
} from 'react';

import { Container } from './styles';
import Checkbox from '../checkbox';
import AvatarTable from '../AvatarTable';

export interface subMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

export interface emailsProps extends TableHTMLAttributes<HTMLTableElement> {
  subMenuItems: subMenuItem[];
  setListSelect(data: subMenuItem[]): void;
  listSelect: subMenuItem[];
}

const Table: React.FC<emailsProps> = ({
  subMenuItems,
  setListSelect,
  listSelect,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<subMenuItem>();

  const isCheckedAll = useMemo(() => {
    return listSelect.length > 0;
  }, [listSelect]);

  const handleTableOver = useCallback(
    (email: subMenuItem) => {
      setIsFocused(email);
    },
    [setIsFocused]
  );
  useEffect(() => {
    setListSelect(listSelect);
  }, [listSelect, setListSelect]);

  const handleChecked = useCallback(
    (email: subMenuItem) => {
      const checkedIndex = listSelect.findIndex((checked) => {
        if (checked.id === email.id) return true;
      });

      if (checkedIndex > -1) {
        listSelect.splice(checkedIndex, 1);
      } else {
        listSelect.push(email);
      }
      setListSelect([...listSelect]);
    },
    [listSelect, setListSelect]
  );

  const handleTableOut = useCallback(
    (email: subMenuItem) => {
      setIsFocused(undefined);
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
              onMouseOver={() => handleTableOver(email)}
              onMouseOut={() => handleTableOut(email)}
            >
              <td className="td-first">
                <div className="avatar-checkbox">
                  <Checkbox
                    type="checkbox"
                    onClick={() => handleChecked(email)}
                    className="checkbox"
                    name={email.id}
                    id={email.id}
                    isVisible={!(isFocused?.id === email.id || isCheckedAll)}
                  />
                  <AvatarTable
                    height={50}
                    width={50}
                    index={index}
                    isFocused={isFocused?.id === email.id}
                    isVisible={isCheckedAll}
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
