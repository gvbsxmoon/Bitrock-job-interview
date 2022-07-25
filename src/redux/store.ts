// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { configureStore } from "@reduxjs/toolkit";
import {
	characterReducer,
	selectedReducer,
	infoReducer,
} from "./reducers/reducers";

export const store = configureStore({
	reducer: {
		allCharacters: characterReducer,
		selectedCharacter: selectedReducer,
		paginationInfo: infoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
