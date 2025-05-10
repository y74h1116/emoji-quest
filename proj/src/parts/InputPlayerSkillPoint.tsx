import { FC } from "react";
import { SkillMax, SkillMin } from "../models/SkillPoint";
import { useAppDispatch, useAppSelector } from "../models/store";
import { updatePlayerSkill } from "../models/PlayerProfileSkill";
import { updateDisplaySkill } from "../models/DisplayProfile";

type InputSkillPointProps = {
  playerSkillKind: string;
  displaySkillKind:string;
};

// ポイント設定
export const InputPlayerSkillPoint:FC<InputSkillPointProps> = (props: InputSkillPointProps) => {
  const appDispatch = useAppDispatch();
  const displaySkillPoint = useAppSelector((state) => state.displaySkill.value[props.displaySkillKind]);

  // 各項目が変更されたときの処理
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // 入力値を 2 桁にする
    const slicedValue = inputValue.slice(0, 2);
    // 整数値を保存
    const skillPoint = parseInt(slicedValue);
    if (!isNaN(skillPoint)) {
      appDispatch(updatePlayerSkill({ key: props.playerSkillKind, value: skillPoint }));
    }
    // 表示内容を更新
    appDispatch(updateDisplaySkill({ key: props.displaySkillKind, value: slicedValue }));

  };

  // css
  const inputPointCss = {
    width: '80px',
  };

  return (
    <input type="number" value={displaySkillPoint} className="border_round no_border" min={SkillMin} max={SkillMax} style={inputPointCss}
      onChange={onChange}
      />
  );
};
