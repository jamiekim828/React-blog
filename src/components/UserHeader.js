import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // we can move this to mapStateToProps
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    // now we need only this.props

    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div className='header'>{user.name}</div>;
  }
}

// get user as props
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
