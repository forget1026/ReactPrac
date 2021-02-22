import React from 'react';

const MyComponent = props => {
    return  <div> 나의 새롭고 멋진 {props.name} 컴포넌트 </div>;
};

MyComponent.defaultProps = {
    name: '기본 이름'
};
export default MyComponent;