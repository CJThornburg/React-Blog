import React from 'react';

import './App.css';

function Creater() {
  return (
    <div className="me">

     <h1> Info on the creater of this site and why?</h1>
<div className="hi">
     <p className="creater-p">Hello, I Chris Thornburg made this blog app!
     I am an inspiring web developer and wanted to show off some of things I know and look forward to learning more about dev and React. This site was created using node and React.</p>
</div>
     <div className="creater-list-div">
     <ul><p>Current features include the following</p>
     <li> React</li>
     <li> React Router</li>
     <li> Node </li>
     <li> Bootstrap</li>
     </ul>
     </div>

    </div>
  );
}

export default Creater;
