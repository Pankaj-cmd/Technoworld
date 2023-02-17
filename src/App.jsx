import Header from './Components/Header';
import "./styles/App.scss"
import "./styles/Home.scss"
import "./styles/Header.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
import "./styles/mediaquery.scss"

function App() {
  return (
    <>
    <Header />
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/services' element={<Services />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
