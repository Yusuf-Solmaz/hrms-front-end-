import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import PostAdv from './pages/PostAdv';
import ConfirmJobAd from './pages/ConfirmJobAd.jsx';



function App(){
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
      {/* <Dashboard/> */}
       <PostAdv/> 
      {/* <ConfirmJobAd/> */}

      </Container>
      
    </div>
  );
}
export default App;