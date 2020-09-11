import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {withRouter} from 'react-router-dom';
import './bottom-nav.scss';

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.items ? props.items[1].link : '',
    };
  }

  render() {
    let {value} = this.state;

    const bottomNavContainerStyle = {
      display: 'block',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    };
    const bottomNavStyle = {
      backgroundColor: 'black',
    };

    let bottomNavigationActionStyle = {
      color: '#fff',
    };

    return (
      <div className='bottom-navigation' style={bottomNavContainerStyle}>
        <BottomNavigation
          value={value}
          style={bottomNavStyle}
          onChange={(event, newValue) => {
            this.setState({
              value: newValue,
            });
            this.props.history.push(newValue);
          }}
          showLabels
        >
          {this.props.items.map((item, index) => {
            if (item.active) {
              return (
                <BottomNavigationAction
                  key={index}
                  icon={item.materialIconComponent}
                  style={{color: '#fff', backgroundColor: 'skyblue'}}
                  label={item.name}
                  value={item.link}
                />
              );
            }
            return (
              <BottomNavigationAction key={index} icon={item.materialIconComponent} style={bottomNavigationActionStyle} label={item.name} value={item.link} />
            );
          })}
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(BottomNav);
