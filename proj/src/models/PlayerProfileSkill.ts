import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SkillMin } from "./SkillPoint";

// もともと Recoil の atomFamily で定義されていた部分を slice に置き換えた

export const PlayerSkillMaxHp = 'PlayerSkillMaxHp';
export const PlayerSkillAttack = 'PlayerSkillAttack';
export const PlayerSkillDefense = 'PlayerSkillDefense';
export const PlayerSkillQuickness = 'PlayerSkillQuickness';

export interface PlayerSkill {
  value: { [key: string]: number }
}

const initialState: PlayerSkill = {
  value: {
    PlayerSkillMaxHp: SkillMin,
    PlayerSkillAttack: SkillMin,
    PlayerSkillDefense: SkillMin,
    PlayerSkillQuickness: SkillMin,
  },
};

export const playerSkillSlice = createSlice({
  name: "playerSkill",
  initialState,
  reducers: {
    // set
    updatePlayerSkill(
      state,
      action: PayloadAction<{ key: string; value: number }>
    ) {
      state.value[action.payload.key] = action.payload.value;
    },
  },
});

export const { updatePlayerSkill} = playerSkillSlice.actions;
