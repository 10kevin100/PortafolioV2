import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Components/Principal';
import Navbar from './Components/navbar';

function App() {
  return (
    <Router>
      <>        
      <Navbar/>
      <div className='bg-dove-gray-800'>
        <div className='max-w-screen-sm items-center text-center'>
          <Routes>
            <Route path='/' element={<Principal />} />
          </Routes>
        </div>

      </div>

      </>

    </Router>
  );
}

export default App;
