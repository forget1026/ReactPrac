import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    return  <div> 안녕하세요. 제 이름은 {name}입니다. <br />
        Children 값은 {children} 입니다.
     </div>;
};

MyComponent.defaultProps = {
    name: '기본 이름'
};
MyComponent.propTypes = {
    name: PropTypes.string
}; // 이렇게 설정하면 props를 전달 할 때 name에 string값을 전달해야만 한다. 다만 경고메시지 자체는 console에 표시된다.
export default MyComponent;