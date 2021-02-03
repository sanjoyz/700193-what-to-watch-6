import React from 'react';
import MainScreen from '../main/main-screen';

const App = (props) => {
  const {movieCardsCount} = props;
  return (
    <MainScreen movieCardsCount={movieCardsCount}
    />
  );
};

export default App;
