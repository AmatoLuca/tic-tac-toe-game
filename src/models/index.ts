export type PlayerComponent = {
  name: string;
  symbol: string;
  isActive: boolean;
};

export type PlayerNameComponent = {
  initialName: string;
  isEditing: boolean;
};

export type GameBoard = Array<Array<string | null>>;

export enum ActivePlayerSymbol {
  PLAYER_ONE = 'X',
  PLAYER_TWO = 'O',
}
