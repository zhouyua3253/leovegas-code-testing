import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer from "@Reducers";

/**
 * Use throughout the app instead of plain `useSelector`
 */
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducer>
> = useSelector;
