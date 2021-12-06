import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

declare global {
  interface Window {
    renderMicro: (containerId: string) => void;
    unmountMicro: (containerId: string) => void;
  }
}

window.renderMicro = (containerId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountMicro = (containerId) => {
  const el = document.getElementById(containerId);
  if (!el) {
    return;
  }

  ReactDOM.unmountComponentAtNode(el);
};
