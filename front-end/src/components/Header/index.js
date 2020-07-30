import React from 'react';
import { Icon } from 'semantic-ui-react'


function Header() {
  return (
    <div 
    style={{ 
      display: 'flex', 
      width: '100%', 
      backgroundColor: '#60c0e0', 
      marginBottom: 20,
      flexDirection: 'column'
    }}>
        <div style={{ marginLeft: 25, padding: 5, marginTop: 5 }}> 
          <Icon inverted size="big" name="talk"/>
          <a style={{ fontSize: 20, marginTop: 0, color: 'white' }}> Lets Talk !</a>

        </div>

    </div>
  );
}

export default Header;
