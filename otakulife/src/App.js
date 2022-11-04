import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
    <div>
    <Header></Header>
    </div>

    <div>
      
    <Nav></Nav>
    </div>

    <div>
      <Main></Main>


    </div>
<Footer></Footer>
    </div>
  );
}

export default App;
