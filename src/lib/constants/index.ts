import type { EmptyReason } from "$lib/types";

export const EMPTY_MESSAGES: Record<EmptyReason, string> = {
  empty: "No todos yet. Add one!",
  filter: "No todos match this filter.",
  search: "No todos match your search.",
};
