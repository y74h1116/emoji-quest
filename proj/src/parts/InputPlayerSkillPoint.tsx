import { FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { playerSkill } from "../models/PlayerProfile";
import { displaySkill } from "../models/DisplayProfile";
import { SkillMax, SkillMin } from "../models/SkillPoint";

type InputSkillPointProps = {
  playerSkillKind: string;
  displaySkillKind:string;
};

// ポイント設定
export const InputPlayerSkillPoint:FC<InputSkillPointProps> = (props: InputSkillPointProps) => {
  const setPlayerSkill = useSetRecoilState(playerSkill(props.playerSkillKind));

  const [displaySkillPoint, setDisplaySkillFunc] = useRecoilState(displaySkill(props.displaySkillKind));

  // 各項目が変更されたときの処理
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // 入力値を 2 桁にする
    const slicedValue = inputValue.slice(0, 2);
    // 整数値を保存
    const skillPoint = parseInt(slicedValue);
    if (!isNaN(skillPoint)) {
      setPlayerSkill(skillPoint);
    }
    // 表示内容を更新
    setDisplaySkillFunc(slicedValue);
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
