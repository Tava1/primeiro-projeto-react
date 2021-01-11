import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/*
      /:repository+ -> Indica o parâmetro de rota para buscar um determinadado item.
      Para buscar um repositorio na API devemos utilizar -> repository/owner
      porem a nossa aplicacao entende que /owner é um nova rota.
      Para que aplicação entenda que o parâmetro é estritamente: repository/owner
      onde a barra nao representa uma rota, e sim parte do parâmetro devemos passar a notação "+".
    */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
