/**
 * enum Direction {
  Up,
  Down,
  Left,
  Right
}
在实际compile中会被compile成如下：

const Direction = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right'
};
 */

export enum RoutesEnum {
  todo = "/todoList",
  carousel = "/carousel",
  search = "/search",
  infiniteScroll = "/infiniteScroll",
  calculator = "/calculator",
  tetris = "/tetris",
  wordle = "/wordle",
}
// 没有最后的 ;
