export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Using a 2D matrix to setup canvas 20 * 12
 * But this actually returns 3 demenison since each cell has a combination of 0 and 'clear'
 */
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
