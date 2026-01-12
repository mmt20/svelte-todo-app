export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = "ALL" | "INCOMPLETE" | "COMPLETE";
export type EmptyReason = "empty" | "filter" | "search";
