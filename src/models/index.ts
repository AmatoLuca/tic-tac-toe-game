export type PlayerComponentProps = {
  name: string;
  symbol: string;
  isActive: boolean;
  onChangeName: Function;
};

export type PlayerNameComponentProps = {
  initialName: string;
  isEditing: boolean;
};

export enum ActivePlayerSymbol {
  PLAYER_ONE = 'X',
  PLAYER_TWO = 'O',
}

export type PlayersCustom = {
  [ActivePlayerSymbol.PLAYER_ONE]: string;
  [ActivePlayerSymbol.PLAYER_TWO]: string;
};

export type GameBoardState = Array<Array<string | null>>;

export type GameBoardProps = {
  onSelectSquare: Function;
  board: GameBoardState;
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

export type GameOverProps = {
  winner: string | undefined;
  onRestart: () => void;
};
