import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClassComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                함수형 컴포넌트가 아닌 클래스형 컴포넌트
                이름 : {name} <br></br>
                children : {children} <br></br>
                propsTyeps 체크 : {favoriteNumber} <br></br>
            </div>
        );
    }
}

MyClassComponent.defualtProps = {
    name: '클래스형 컴포넌트'
};
MyClassComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyClassComponent;