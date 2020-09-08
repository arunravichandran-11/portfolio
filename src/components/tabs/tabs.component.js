import React from 'react';
import './tabs.styles.scss';

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(i) {
    this.setState({
      active: i,
    });
  }

  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        return (
          <a onClick={(e) => this.handleSelect(i)} className={`${active} tab`}>
            {item}
          </a>
        );
      }
    });
  };

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className='content'>{item}</div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className='tabs'>
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Tabs;
