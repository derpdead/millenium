import React, { FC } from 'react';

import './LayoutBody.scss';

const LayoutBody: FC = ({
  children,
}) => (
  <div className="layout-body">
    <div className="layout-body__c">
      <div className="layout-body__e">E</div>
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default LayoutBody;
