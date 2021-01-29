import React from 'react';
import PropTypes from 'prop-types';
import './lunbo.less';
const Button = (props) => {
  const { buttonChange } = props;
  return (
    <div>
      <span
        className="prev-button button"
        onClick={() => {
          buttonChange('left');
        }}
      ></span>
      <span
        className="next-button button"
        onClick={() => {
          buttonChange('right');
        }}
      ></span>
    </div>
  );
};
class Pagination extends React.Component {
  render() {
    let { data, activeIndex, focusChange } = this.props;
    activeIndex = activeIndex === data.length - 1 ? 0 : activeIndex;
    data = [...data];
    data.pop();
    return (
      <ul className="pagination">
        {data.map((dot, index) => {
          return (
            <li
              className={activeIndex === index ? 'active' : ''}
              key={dot.id}
              onClick={() => {
                focusChange(index);
              }}
            ></li>
          );
        })}
      </ul>
    );
  }
}
export default class Lunbo extends React.Component {
  static defaultProps = {
    interval: 1000,
    speed: 300,
    activeIndex: 0,
    pagination: true,
    button: true,
    transitionEnd: Function.prototype,
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    interval: PropTypes.number,
    speed: PropTypes.number,
    activeIndex: PropTypes.number,
    pagination: PropTypes.bool,
    button: PropTypes.bool,
    transitionEnd: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const { data, activeIndex, speed } = this.props;
    data.push({
      ...data[0],
      id: data.length + 1,
    });
    this.state = {
      data,
      activeIndex,
      speed,
    };
  }
  render() {
    // console.log('ok');
    const { data, activeIndex, speed } = this.state;
    const wrapperStyle = {
      width: data.length * 800,
      left: -activeIndex * 800,
      transition: `left ${speed}ms linear`,
    };
    return (
      <div
        className="container"
        onMouseEnter={() => {
          clearInterval(this.timeout);
        }}
        onMouseLeave={() => {
          this.timeout = setInterval(
            () => this.autoMove(),
            this.props.interval
          );
        }}
      >
        <ul
          className="banner-box"
          style={wrapperStyle}
          ref={(wrapper) => (this.wrapper = wrapper)}
        >
          {data.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={require('../assets/images/' + item.imgName).default}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
        {this.props.pagination ? (
          <Pagination
            data={data}
            activeIndex={activeIndex}
            focusChange={this.focusChange}
          ></Pagination>
        ) : null}
        {this.props.button ? (
          <Button buttonChange={this.buttonChange}></Button>
        ) : null}
      </div>
    );
  }
  buttonChange = (direction) => {
    let { data, activeIndex } = this.state;
    if (direction === 'left') {
      activeIndex--;
      if (activeIndex < 0) {
        // 在合成事件中setState是异步操作，所以这里要等到它设置完了之后再去处理
        this.setState(
          {
            activeIndex: data.length - 1,
            speed: 0,
          },
          () => {
            const sty = this.wrapper.style;
            this.setState({
              activeIndex: data.length - 2,
              speed: this.props.speed,
            });
          }
        );
        return;
      }
      this.setState({
        activeIndex,
        speed: this.props.speed,
      });
      return;
    }
    // 处理边界条件
    activeIndex++;
    if (activeIndex >= data.length) {
      // 在合成事件中setState是异步操作，所以这里要等到它设置完了之后再去处理
      this.setState(
        {
          activeIndex: 0,
          speed: 0,
        },
        () => {
          const sty = this.wrapper.style;
          this.setState({
            activeIndex: 1,
            speed: this.props.speed,
          });
        }
      );
      return;
    }
    this.setState({
      activeIndex,
      speed: this.props.speed,
    });
  };
  focusChange = (index) => {
    this.setState({
      activeIndex: index,
      speed: this.props.speed,
    });
  };
  autoMove = () => {
    let { activeIndex, data } = this.state;
    activeIndex++;
    if (activeIndex >= data.length) {
      this.setState({
        activeIndex: 0,
        speed: 0,
      });
      activeIndex = 1;
      const styleObj = this.wrapper.style;
    }
    this.setState({
      activeIndex,
      speed: this.props.speed,
    });
  };
  componentDidMount() {
    // 第一次加载完成，开始自动轮播
    this.timeout = setInterval(() => this.autoMove(), this.props.interval);
  }
}
