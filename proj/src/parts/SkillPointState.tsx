import { FC } from "react";
import { DisplayAttack, DisplayDefense, DisplayMaxHp, DisplayQuickness } from "../models/DisplayProfile";
import { SkillsTotalMax } from "../models/SkillPoint";
import { useAppSelector } from "../models/store";

type SkillPointTotalProps = {
  kind: string;
};
export const SkillPointTotal = 'SkillPointTotal';
export const SkillPointRest = 'SkillPointRest';

// 入力済のポイントの合計値もしくは未入力のポイント数を表示
export const SkillPointState:FC<SkillPointTotalProps> = (props: SkillPointTotalProps) => {
  const displayMaxHp = useAppSelector((state) => state.displaySkill.value[DisplayMaxHp]);
  const displayAttack = useAppSelector((state) => state.displaySkill.value[DisplayAttack]);
  const displayDefense = useAppSelector((state) => state.displaySkill.value[DisplayDefense]);
  const displayQuickness = useAppSelector((state) => state.displaySkill.value[DisplayQuickness]);

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
