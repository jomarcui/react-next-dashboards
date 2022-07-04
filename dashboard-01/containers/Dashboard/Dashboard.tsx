/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  AccountBalanceOutlined,
  CreditCardOutlined,
  LocationCityOutlined,
  MoreVertOutlined,
  OtherHousesOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { InputText } from '../../components/Input';
import { TransferActionButton } from '../../components/TransferAction';
import Balance from '../Balance';
import {
  DashboardContainerStyled,
  TransferActionButtonContainerStyled,
  TransferActionButtonContentStyled,
  TransferActionButtonContentFeeStyled,
  TransferActionButtonContentLabelStyled,
  TransferActionButtonContentMoreStyled,
} from './Dashboard.styles';

const Dashboard = () => {
  const [searchKeyword, setSearchKeyWord] = useState('');

  const handleChange = (event) => setSearchKeyWord(event.target.value);

  const transferActions = [
    {
      fee: 1200,
      Icon: CreditCardOutlined,
      id: 0,
      label: 'Transfer via Card Number',
    },
    {
      fee: 1200,
      Icon: OtherHousesOutlined,
      id: 1,
      label: 'Transfer to Other Banks',
    },
    {
      fee: 1200,
      Icon: AccountBalanceOutlined,
      id: 2,
      label: 'Transfer to Same Bank',
    },
    {
      fee: 1200,
      Icon: LocationCityOutlined,
      id: 3,
      label: 'Transfer to Other Bank',
    },
  ];

  return (
    <DashboardContainerStyled>
      <div style={{ margin: '2em 0' }}>
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
      <TransferActionButtonContainerStyled>
        <div>
          {transferActions.map(({ fee, Icon, id, label, ...props }) => {
            const labelPartA = label.slice(0, 12);
            const labelPartB = label.slice(12);

            return (
              <TransferActionButton key={id} value={label} {...props}>
                <TransferActionButtonContentStyled>
                  <TransferActionButtonContentMoreStyled>
                    <Icon fontSize="large" />
                    <MoreVertOutlined css={{ color: '#9d9d9f' }} />
                  </TransferActionButtonContentMoreStyled>
                  <TransferActionButtonContentLabelStyled>
                    <span>{labelPartA}</span>
                    <span>{labelPartB}</span>
                  </TransferActionButtonContentLabelStyled>
                  <TransferActionButtonContentFeeStyled>
                    ${fee}
                  </TransferActionButtonContentFeeStyled>
                </TransferActionButtonContentStyled>
              </TransferActionButton>
            );
          })}
        </div>
      </TransferActionButtonContainerStyled>
      <Balance />
    </DashboardContainerStyled>
  );
};

export default Dashboard;
