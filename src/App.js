import React from 'react';

// importamos redux Store
import store from './store.js';
import  { Provider} from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header>
        <h1 className="text-center">Administrador de pacientes de veterinaria</h1>
      </header>
      <div className="row mt-3">
        <div className="col-md-6">
          <h4>Formulario aqui</h4>
        </div>
        <div className="col-md-6">
          <h4>Listado aqui</h4>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
