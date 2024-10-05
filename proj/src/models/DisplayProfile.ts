import { atomFamily } from "recoil";
import { SkillMin } from "./SkillPoint";

// 第一引数にatomそのものの型,第二引数に引数の型を指定
export const displaySkill = atomFamily<string, string>({
  key: "displaySkill",
  default: SkillMin.toString(),
});

export const DisplayMaxHp = 'DisplayMaxHp';
export const DisplayAttack = 'DisplayAttack';
export const DisplayDefense = 'DisplayDefense';
export const DisplayQuickness = 'DisplayQuickness';
