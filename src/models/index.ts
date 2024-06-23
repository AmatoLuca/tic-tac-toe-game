export type PlayerComponentProps = {
  name: string;
  symbol: string;
  isActive: boolean;
};

export type PlayerNameComponentProps = {
  initialName: string;
  isEditing: boolean;
};

export enum ActivePlayerSymbol {
  PLAYER_ONE = 'X',
  PLAYER_TWO = 'O',
}

export type GameBoardState = Array<Array<string | null>>;

export type GameBoardProps = {
  onSelectSquare: Function;
  activePlayerSymbol: ActivePlayerSymbol;
};
