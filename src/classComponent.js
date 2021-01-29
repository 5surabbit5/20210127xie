import React from 'react';
import PropTypes from 'prop-types';
import './vote.less';
class TestLifeCycle extends React.Component {
  static defaultProps = {
    num: 100,
  };
  static propTypes = {
    num: PropTypes.number,
  };
  constructor(props) {
    // console.log('constructor');
    super(props);
    this.state = {
      num: this.props.num,
    };
    console.log(this.props);
  }
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }
  static getDerivedStateFromProps(props, state) {
    console.log('getDreivedStateFromProps', props, state);
    return props;
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // handleClick = () => {
  //   console.log('1');
  //   this.setState({
  //     num: this.state.num + 1,
  //   });
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate', prevProps, prevState);
  //   return null;
  // }
  // componentDidUpdate() {
  //   console.log('componentDidMount');
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps);
  // }
  render() {
    console.log('render');
    return (
      <div onClick={() => this.handleClick()} className="vote-box">
        {this.state.num}
      </div>
    );
  }
}

export default class ControlCenter extends React.Component {
  state = {
    x: 0,
  };
  handleClick = () => {
    const { x } = this.state;
    this.setState({
      x: x + 1,
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  render() {
    const { x } = this.state;
    return (
      <div>
        <TestLifeCycle num={x}></TestLifeCycle>
        <button onClick={this.handleClick}>点我加一</button>
      </div>
    );
  }
}
