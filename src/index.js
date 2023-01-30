import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import rootReducer from './features';
import './index.css';
const queryClient = new QueryClient()
const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
        </Provider>
    </QueryClientProvider>
);

