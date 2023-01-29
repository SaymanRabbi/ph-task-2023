import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './app/store';
import './index.css';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
        </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

