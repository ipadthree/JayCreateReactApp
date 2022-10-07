import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router-dom";
import TodoList from "../TodoList";
import { RoutesEnum } from "../../models/RoutesEnum";
import Home from "../Home";
import Carousel from "../Carousel";
import SearchBar from "../SearchBar";
import InfiniteScroll from "../InfiniteScroll";
import Calculator from "../Calculator";

const Content = styled.section`
  height: calc(100vh - var(--nav-size));
`;

const AppContent = (): ReactElement => {
  // 用children来render Route component是最推荐的，其他形式是满足之前需要。
  return (
    <Content>
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
        <Route path={RoutesEnum.infiniteScroll} exact>
          <InfiniteScroll />
        </Route>
        <Route path={RoutesEnum.calculator} exact>
          <Calculator />
        </Route>
      </Switch>
    </Content>
  );
};

export default AppContent;
