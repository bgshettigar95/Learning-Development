import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Account from './pages/AccountSettings';
import Home from './pages/Home';
import Messages from './pages/Messages';
import MyLearning from './pages/MyLearning';
import Posts from './pages/Posts';
import Error from './pages/Error';
import RootLayout from './pages/Root';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'my-learnings', element: <MyLearning />
        },
        {
          path: 'posts', element: <Posts />
        },
        {
          path: 'account', element: <Account />
        },
        {
          path: 'messages', element: <Messages />
        }
      ]
    }
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  );
}

export default App;
