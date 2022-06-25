/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { InputText } from '../../components/Input';
import { DashboardContainerStyled } from './Dashboard.styles';

const Dashboard = () => {
  const [searchKeyword, setSearchKeyWord] = useState('');

  const handleChange = (event) => setSearchKeyWord(event.target.value);

  return (
    <DashboardContainerStyled>
      <div>
        <h1
          css={{
            fontWeight: 700,
            color: '#262626',
            margin: 0,
          }}
        >
          Dashboard
        </h1>
        <div
          css={{
            fontSize: '1em',
            fontWeight: 300,
            color: '#9d9d9f',
          }}
        >
          Payment updates
        </div>
        <div>
          <InputText
            onChange={handleChange}
            placeholder="Search"
            value={searchKeyword}
          />
        </div>
      </div>
    </DashboardContainerStyled>
  );
};

export default Dashboard;
