import React from 'react';
import MyComponent from './MyComponent';
import MyClassComponent from './MyClassComponent';

const App = () => {
  return <>
        <MyComponent name={"1"} favoriteNumber={2}>리액트</MyComponent>
        <MyClassComponent name={"테스트"} favoriteNumber={77}>children test</MyClassComponent>
    </>;
}
export default App;
