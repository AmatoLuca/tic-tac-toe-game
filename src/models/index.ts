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
  turns: GameTurnsState;
};

export type GameTurns = {
  square: {
    row: number;
    col: number;
  };
  player: ActivePlayerSymbol;
};

export type GameTurnsState = Array<GameTurns>;

export type LofComponentProps = {
  turns: GameTurns[];
};
