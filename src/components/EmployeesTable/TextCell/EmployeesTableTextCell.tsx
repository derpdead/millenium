import React, { FC } from 'react';

import './EmployeesTableTextCell.scss';

interface IEmployeesTableTextCellProps {
  text: string;
}

const EmployeesTableTextCell: FC<IEmployeesTableTextCellProps> = ({
  text,
}) => (
  <span className="employees-table-text-cell">
    {text}
  </span>
);

export default EmployeesTableTextCell;
