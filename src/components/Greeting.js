import React, { useState } from 'react';

function Greeting({ name }) {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h1>Hello, {name} 👋</h1>
      <p>You’ve clicked {clicks} times</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
    </div>
  );
}

export default Greeting;