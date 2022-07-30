import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BlogCard from './Components/BlogCard';
import WalletProvider from './Context/WalletContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WalletProvider>
        <Header/>
      <BlogCard/>
        </WalletProvider>
   
      </header>
    </div>
  );
}

export default App;
