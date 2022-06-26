import styled from '@emotion/styled';
import { mq } from '../utilities/mediaQuery';
import ComponentsLayout from '../components/Layout';
import ContainersNavigation from '../containers/Navigation';
import Dashboard from '../containers/Dashboard';

const MainContainerStyled = styled.div`
  display: grid;

  ${mq['XS']} {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'Navigation'
      'Dashboard'
      'Other';
  }
`;

const OtherContainerStyled = styled.div`
  ${mq['XS']} {
    grid-area: Other;
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
