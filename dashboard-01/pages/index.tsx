import styled from '@emotion/styled';
import { mq } from '../utilities/mediaQuery';
import ComponentsLayout from '../components/Layout';
import ContainersNavigation from '../containers/Navigation';
import Dashboard from '../containers/Dashboard';

const MainContainerStyled = styled.div`
  display: grid;

  ${mq['XS']} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1em 1em;
    grid-template-areas:
      'Navigation'
      'Dashboard'
      'Other';
  }
`;

const OtherContainerStyled = styled.div`
  ${mq['XS']} {
    grid-area: Dashboard;
  }
`;

export default function Home() {
  return (
    <ComponentsLayout>
      <MainContainerStyled>
        <ContainersNavigation />
        <Dashboard />
        <OtherContainerStyled />
      </MainContainerStyled>
    </ComponentsLayout>
  );
}
