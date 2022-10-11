import styled from "styled-components";
import backgroundImg from "../../../Assets/Images/Tetris/bg.png";

/**
 * background-size 决定background image的大小
 * auto: image自己的original 大小
 * cover: resize imageto cover container,会变形
 * ...
 * 还有两个数字的是specify宽和高
 */
// using url and import above to include the image directly
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  hieght: 100vh;
  background: url(${backgroundImg}) #000;
  overflow: hidden;
  background-size: cover;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
