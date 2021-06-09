export type Status = "DEFAULT" | "LOADING" | "SUCCESS" | "ERROR";

export interface State {
    list: { text: string }[];
    send: {
      result?: string;
      status: Status;
    };
  }
  