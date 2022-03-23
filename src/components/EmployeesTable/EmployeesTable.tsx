import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EmployeesTableHeader from './Header/EmployeesTableHeader';

import './EmployeesTable.scss';
import EmployeesTableTextCell from './TextCell/EmployeesTableTextCell';
import EmployeesTableRow from './Row/EmployeesTableRow';
import { IEmployeeModel } from '../../models/employee';
import EmployeesTableFooter from './Footer/EmployeesTableFooter';

const EmployeesTable: FC = () => {
  const [employees, setEmployees] = useState<Array<IEmployeeModel>>([
    {
      id: uuidv4(),
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
  ]);

  const onAddEmployee = (employee: IEmployeeModel) => {
    setEmployees((prevState) => [...prevState, employee]);
  };

  const onRemoveEmployee = (id: string) => {
    setEmployees((prevState) => prevState.filter((employee) => employee.id !== id));
  };

  return (
    <div className="employees-table">
      <EmployeesTableHeader />
      <div className="employees-table__body">
        {
          employees.length === 0
          && (
          <p>
            <span>Dodaj pierwszego pracownika!</span>
          </p>
          )
        }
        {
          employees.map((employee) => (
            <EmployeesTableRow key={employee.id} rowId={employee.id} onRemove={onRemoveEmployee}>
              <EmployeesTableTextCell text={employee.firstName} />
              <EmployeesTableTextCell text={employee.lastName} />
            </EmployeesTableRow>
          ))
        }
      </div>
      <EmployeesTableFooter disabled={employees.length > 5} onAdd={onAddEmployee} />
    </div>
  );
};

export default EmployeesTable;
