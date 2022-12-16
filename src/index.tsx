import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './index.css';
import Challenge from './Challenge';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <RouterProvider router={defaultRouter} /> */}
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Challenge/>
        </ThemeProvider>        
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
