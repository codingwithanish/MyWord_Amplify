import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { withAuthenticator } from '@aws-amplify/ui-react';



const App = () => {
  return <AppRoutes />;
};

export default withAuthenticator(App);
