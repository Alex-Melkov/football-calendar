export type Team = {
    name: string;
    logo: string;
    logoId: number
};
  
export type Stadium = {
    name: string
};
  
export interface IItems {
    _id: number;
    tourNumber: number;
    teamHome: Team;
    teamAway: Team;
    scoreFtHome: number;
    scoreFtAway: number;
    stadium: Stadium;
    date: string
};

export interface IfetchCarts {
    items: IItems[];
    total: number;
}
  
export interface ICartSliceState {
    offset: number;
    total: number;
    items: IItems[];
    status: Status;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
};