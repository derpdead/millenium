import React from 'react';
import './App.scss';

import { Layout } from './components/index';
import EmployeesTable from './components/EmployeesTable/EmployeesTable';

function App() {
  return (
    <div className="App">
      <Layout>
        <EmployeesTable />
      </Layout>
    </div>
  );
}

export default App;
