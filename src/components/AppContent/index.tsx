import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

const AppContent = (): ReactElement => {
    // 用children来render Route component是最推荐的，其他形式是满足之前需要。
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    );
};

export default AppContent;
