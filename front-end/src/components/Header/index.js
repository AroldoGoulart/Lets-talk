import React from 'react';
import { Icon } from 'semantic-ui-react'

function Header(props) {
  const { setIsOpenMain } = props;

  function signOut() {
    localStorage.removeItem('isOpen');
    localStorage.removeItem('letsTalkeNickName');
    setIsOpenMain(true);
  }

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#60c0e0',
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        padding: '3px 12px 3px 12px',
        width: '100%',
      }}>
      <div style={{ padding: 5 }}>
        <Icon inverted size="big" name="talk" />
        <a style={{ color: 'white', fontSize: 20, marginTop: 0 }} href="/"> Let's Talk!</a>
      </div>
      <div style={{ cursor: 'pointer', padding: 5 }} onClick={() => signOut()}>
        <Icon inverted size="big" name="sign-out alternate" />
      </div>
    </div>
  );
}

export default Header;
