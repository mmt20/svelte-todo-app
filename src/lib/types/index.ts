export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = "ALL" | "ACTIVE" | "COMPLETED";
export type EmptyReason = "empty" | "filter" | "search";
