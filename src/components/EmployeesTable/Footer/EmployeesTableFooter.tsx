import React, { FC, SyntheticEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IEmployeeModel } from '../../../models/employee';

import './EmployeesTableFooter.scss';
import { TextField } from '../../index';

interface IEmployeesTableFooterProps {
  disabled: boolean;
  onAdd: (employee: IEmployeeModel) => void;
}

const EmployeesTableFooter: FC<IEmployeesTableFooterProps> = ({
  disabled,
  onAdd,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    onAdd({
      id: uuidv4(),
      firstName,
      lastName,
    });

    setFirstName('');
    setLastName('');
  };

  return (
    <div className="employees-table-footer">
      <form onSubmit={onSubmit}>
        <p>
          <TextField id="firstNameInput" required value={firstName} label="Imie" name="firstName" onValueChange={setFirstName} />
        </p>
        <p>
          <TextField id="lastNameInput" required value={lastName} label="Nazwisko" name="lastName" onValueChange={setLastName} />
        </p>
        <button
          disabled={disabled}
          type="submit"
        >
          Dodaj pracownika
        </button>
      </form>
    </div>
  );
};

export default EmployeesTableFooter;
