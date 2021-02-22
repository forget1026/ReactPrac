import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state; // state의 값 조회시 this.state로 조회할 수 있음
        return (
            <div>
                <h1>{number}</h1>
                <h2>고정 값 : {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState({number: number + 1}, () => {console.log(this.state)}); // this.setState를 통해 state의 값 변경가능. callback함수를 통한 state값 확인
                }}>
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;