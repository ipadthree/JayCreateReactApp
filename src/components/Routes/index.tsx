import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoList from '../TodoList';
import { RoutesEnum } from '../../models/RoutesEnum';
import Home from '../Home';
import Carousel from '../Carousel';
import SearchBar from '../SearchBar';

const AppContent = (): ReactElement => {
    // 用children来render Route component是最推荐的，其他形式是满足之前需要。
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path={RoutesEnum.todo} exact>
                <TodoList />
            </Route>
            <Route path={RoutesEnum.carousel} exact>
                <Carousel />
            </Route>
            <Route path={RoutesEnum.search} exact>
                <SearchBar />
            </Route>
        </Switch>
    );
};

export default AppContent;
