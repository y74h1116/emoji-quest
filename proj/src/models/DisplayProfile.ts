import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillMin } from "./SkillPoint";

// もともと Recoil の atomFamily で定義されていた部分を slice に置き換えた

export const DisplayMaxHp = 'DisplayMaxHp';
export const DisplayAttack = 'DisplayAttack';
export const DisplayDefense = 'DisplayDefense';
export const DisplayQuickness = 'DisplayQuickness';

export interface DisplaySkill {
  value: { [key: string]: string }
}

const initialState: DisplaySkill = {
  value: {
    DisplayMaxHp: SkillMin.toString(),
    DisplayAttack: SkillMin.toString(),
    DisplayDefense: SkillMin.toString(),
    DisplayQuickness: SkillMin.toString(),
  },
};
  
export const displaySkillSlice = createSlice({
  name: "displaySkill",
  initialState,
  reducers: {
    // set
    updateDisplaySkill(
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) {
      state.value[action.payload.key] = action.payload.value;
    },
  },
});

export const { updateDisplaySkill} = displaySkillSlice.actions;



