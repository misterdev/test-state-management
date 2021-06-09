export type List = { text: string }[];

export type Send = {
  result?: string;
  status: Status;
}

export type Status = "DEFAULT" | "LOADING" | "SUCCESS" | "ERROR";
export interface State {
  list: List;
  send: Send;
}
