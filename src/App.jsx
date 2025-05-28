import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="" />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
		<p>They can be fun and helpful!</p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
