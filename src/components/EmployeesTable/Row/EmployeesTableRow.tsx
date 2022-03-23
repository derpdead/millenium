import React, { FC, useState } from 'react';

import './EmployeesTableRow.scss';
import classNames from 'classnames';

interface IEmployeesTableRowProps {
  rowId: string;
  onRemove: (id: string) => void;
}

const EmployeesTableRow: FC<IEmployeesTableRowProps> = ({
  rowId,
  children,
  onRemove,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const classes = classNames(
    'employees-table-row',
    {
      'employees-table-row--hovering': isHovering,
    },
  );

  const onClick = () => {
    onRemove(rowId);
  };

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={classes}>
      <button
        className="employees-table-row__remove-button"
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Remove
      </button>
      {children}
    </div>
  );
};

export default EmployeesTableRow;
