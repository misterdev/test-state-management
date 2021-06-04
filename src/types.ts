export interface State {
    list: { text: string }[];
    send: {
      result?: string;
      status: "DEFAULT" | "LOADING" | "SUCCESS" | "ERROR";
    };
  }
  