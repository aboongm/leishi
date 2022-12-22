import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
import { ToastContainer } from 'react-toastify';
// import { store } from './RtkQuery/store';
import App from './components/App';

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
);
