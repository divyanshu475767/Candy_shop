
import Provider from './store/Provider';

import CandyForm from './components/CandyForm.js';
import CandyList from './components/CandyList.js';
import Cart from './components/Cart';

function App(props) {

  return (
    <Provider>

      <CandyForm/>
      <CandyList/>
   

    </Provider>
  );
}

export default App;
