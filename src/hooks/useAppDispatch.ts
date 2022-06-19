import { useDispatch } from "react-redux";
import store from "@Store";

/**
 * Use throughout the app instead of plain `useDispatch`
 */
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
