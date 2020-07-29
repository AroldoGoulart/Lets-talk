import React from 'react';
import { Icon } from 'semantic-ui-react'


function Header() {
  return (
    <div style={{ width: '100%', backgroundColor: '#60c0e0', marginBottom: 20 }}>
        <div style={{ marginLeft: 25, padding: 10 }}> 
        <Icon inverted size="big" name="talk"/>
        <a style={{ fontSize: 30, padding: 0 }}> Lets Talk</a>
        </div>
    </div>
  );
}

export default Header;
