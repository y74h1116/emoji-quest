import { FC } from "react";
import { useRecoilValue } from "recoil";
import { DisplayAttack, DisplayDefense, DisplayMaxHp, DisplayQuickness, displaySkill } from "../models/DisplayProfile";
import { SkillsTotalMax } from "../models/SkillPoint";

type SkillPointTotalProps = {
  kind: string;
};
export const SkillPointTotal = 'SkillPointTotal';
export const SkillPointRest = 'SkillPointRest';

// 入力済のポイントの合計値もしくは未入力のポイント数を表示
export const SkillPointState:FC<SkillPointTotalProps> = (props: SkillPointTotalProps) => {
  const displayMaxHp = useRecoilValue(displaySkill(DisplayMaxHp));
  const displayAttack = useRecoilValue(displaySkill(DisplayAttack)); 
  const displayDefense = useRecoilValue(displaySkill(DisplayDefense));
  const displayQuickness = useRecoilValue(displaySkill(DisplayQuickness));

  const total = Number(displayMaxHp) + Number(displayAttack)
    + Number(displayDefense) + Number(displayQuickness);

  if (props.kind === SkillPointTotal) {
    return (
      <div>{'合計' + total + 'point'}</div>
      );
  } else {
    const rest = SkillsTotalMax
      - Number(displayMaxHp) - Number(displayAttack)
      - Number(displayDefense) - Number(displayQuickness);
    return (
      <div>{
        ((total <= SkillsTotalMax)? <>(残り {rest} point)</>:<>point が多すぎます<br/>減らしてください！</>)
      }</div>
    );
  }
};
