import React from "react";
import ReactPlayer from 'react-player';

const App = () => {

  const vid="https://www.youtube.com/watch?v=kMiy8ZywF88"
  return (
    <div>
     <ReactPlayer url={vid}
     playing={true}
     volume={0.5} />
    </div>
  );
};

export default App;