import { useLocation } from "react-router-dom";

export const api = "https://34.239.137.93/api";
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
