export interface Test {
  _id?: string;
  name: string;
  description?: string;
  tasks: {
    title: string;
    body: string;
    type: "many" | "one" | "input";
    variants: {
      value: string;
      isAnswer?: boolean;
    }[];
  }[];
}
