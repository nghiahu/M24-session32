import React, { Component } from 'react';

interface Props {}
interface State {
  count: number;
}
let interval:any
export default class ClassComponent extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      console.log('hàm setTimeout được gọi');
    }, 5000);

    interval = setInterval(() => {
      console.log('hàm setInterval được gọi');
    }, 2000);
  }

  handleClick = () => {
    clearInterval(interval);
  };

  render() {
    return (
      <div>
        ClassComponent
        <button onClick={this.handleClick}>Dừng Interval</button>
      </div>
    );
  }
}
