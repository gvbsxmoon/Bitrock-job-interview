import { createAction } from "@reduxjs/toolkit";
import { ApiInfo } from "../../interfaces/ApiInfo";
import { Character } from "../../interfaces/Character";
import { actionT } from "./actionTypes";

export const setCharacters = createAction<Character[]>(actionT.SET_CHARACTERS);
export const selectedCharacter = createAction<Character>(actionT.SELECTED_CHARACTER);
export const apiInfos = createAction<ApiInfo>(actionT.API_INFO);
