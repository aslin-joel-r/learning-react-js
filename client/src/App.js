

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <video src='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls/>
  );
};

export default App;