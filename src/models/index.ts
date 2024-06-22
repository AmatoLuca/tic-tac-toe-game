export type PlayerComponent = {
  name: string;
  symbol: string;
};

export type PlayerNameComponent = {
  initialName: string;
  isEditing: boolean;
};

export type GameBoard = Array<Array<string | null>>;
