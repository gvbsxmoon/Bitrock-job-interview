import { createReducer } from "@reduxjs/toolkit";
import { ApiInfo } from "../../interfaces/ApiInfo";
import { Character } from "../../interfaces/Character";
import { apiInfos, selectedCharacter, setCharacters } from "../actions/actions";

const initialSetCharacters: Character[] = [];
const initialSelectedCharacter: Character = {} as Character;
const initialApiInfos: ApiInfo = {} as ApiInfo;

export const characterReducer = createReducer(initialSetCharacters, (builder) => {
	builder.addCase(setCharacters, (state, action) => {
		return {...state, results: action.payload}
	});
});

export const selectedReducer = createReducer(initialSelectedCharacter, (builder) => {
	builder.addCase(selectedCharacter, (state, action) => {
		return {...state, results: action.payload} 
	})
})

export const infoReducer = createReducer(initialApiInfos, (builder) => {
	builder.addCase(apiInfos, (state, action) => {
		return {...state, results: action.payload}
	})
})
