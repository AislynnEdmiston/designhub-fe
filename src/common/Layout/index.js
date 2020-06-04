import React from 'react';

import TopBar from '../Nav/TopBar';

import { useAuth0 } from '../../utilities/auth-wrapper';

import '../DesignHub.scss';

export default function Layout({ children }) {
  const { user } = useAuth0();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeUser: this.props.user,
  //     search: [],
  //     searchTerm: '',
  //   };
  // }
  // componentDidMount() {
  //   if (this.props.history.location.pathname === '/') {
  //     const { id, username } = this.state.activeUser;
  //     this.props.history.push(`/profile/${id}/${username}`);
  //   }
  // }

  // async getSearch(event, text, history) {
  //   event.preventDefault();
  //   const {
  //     data: { projects, users },
  //   } = await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/search`, {
  //     searchText: text,
  //   });
  //   this.setState({ search: { projects, users }, searchTerm: text });
  //   history.push('/search');
  // }

  console.log('current user:', user);

  return (
    <>
      <TopBar activeUser={user} />
      <div>{children}</div>
    </>
  );
}
