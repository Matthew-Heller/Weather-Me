import { v4 as uuidv4 } from "uuid";

export function useSessionToken(token) {
  if (!token) {
    return uuidv4();
  }
  return;
}
