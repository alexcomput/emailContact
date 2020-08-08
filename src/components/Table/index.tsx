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
  checked: boolean;
}

export interface emailsProps extends TableHTMLAttributes<HTMLTableElement> {
  list: subMenuItem[];
  setList(data: subMenuItem[]): void;
}

const Table: React.FC<emailsProps> = ({ list, setList, ...rest }) => {
  const [isFocused, setIsFocused] = useState<subMenuItem>();

  const isCheckedAll = useMemo(() => {
    return !!list.find((data) => data.checked);
  }, [list]);

  const handleTableOver = useCallback(
    (email: subMenuItem) => {
      setIsFocused(email);
    },
    [setIsFocused]
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
        {list.map((data, index: number) => {
          return (
            <tr
              key={index}
              onMouseOver={() => handleTableOver(data)}
              onMouseOut={() => handleTableOut(data)}
            >
              <td className="td-first">
                <div className="avatar-checkbox">
                  <Checkbox
                    type="checkbox"
                    onChange={(event) => {
                      const { checked } = event.target;
                      setList(
                        list.map((d) => {
                          if (data.id === d.id) d.checked = checked;
                          return d;
                        })
                      );
                    }}
                    checked={data.checked}
                    className="checkbox"
                    name={data.id}
                    id={data.id}
                    isVisible={!(isFocused?.id === data.id || isCheckedAll)}
                  />
                  <AvatarTable
                    height={50}
                    width={50}
                    index={index}
                    isFocused={isFocused?.id === data.id}
                    isVisible={isCheckedAll}
                  >
                    {data.owner}
                  </AvatarTable>
                </div>
              </td>
              <td>
                <div>
                  <p className="flex ">{data.name}</p>
                  <p className="flex text-subject">{data.subject}</p>
                </div>
              </td>
              <td className="flex place-content-end">
                <div className="time-users">
                  <p>Hoje as 11</p>
                  <p>2 horas</p>
                  <div className="circle-users">
                    {data.users.map((user, index) => {
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
