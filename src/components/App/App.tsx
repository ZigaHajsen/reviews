import React from 'react';
import {
  Main,
  Container,
  Title,
  TitleText,
  Underline,
} from './styles/AppStyle';
import { Review } from '../';

const App: React.FC = () => {
  return (
    <Main>
      <Container>
        <Title>
          <TitleText>our reviews</TitleText>
          <Underline className='underline'></Underline>
        </Title>
        <Review />
      </Container>
    </Main>
  );
};

export default App;
