/** @jsxRuntime classic */
/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/react';
import { BalanceContainerStyled, FlexRow } from './Balance.styles';

interface BalanceProps {
  children?: ReactNode;
}

const Balance = ({ children }: BalanceProps) => (
  <BalanceContainerStyled>
    <FlexRow>
      <div>
        <div css={{ fontSize: '1em', fontWeight: '300', color: '#9d9d9f' }}>
          Balance
        </div>
        <div css={{ fontSize: '2em', fontWeight: '700', color: '#262626' }}>
          $1500
        </div>
      </div>
      <div css={{ fontSize: '1em', fontWeight: '300', color: '#9d9d9f' }}>
        PAST 30 DAYS
      </div>
    </FlexRow>
  </BalanceContainerStyled>
);

export default Balance;
