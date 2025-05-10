import { FC } from "react";
import { DisplayAttack, DisplayDefense, DisplayMaxHp, DisplayQuickness } from "../models/DisplayProfile";
import { isValidSkill, SkillsTotalMax } from "../models/SkillPoint";
import { useAppSelector } from "../models/store";

export const validPlayerProfile = () => {
  const playerName = useAppSelector((state) => state.playerName.value);

  const displayMaxHp = useAppSelector((state) => state.displaySkill.value[DisplayMaxHp]);
  const displayAttack = useAppSelector((state) => state.displaySkill.value[DisplayAttack]);
  const displayDefense = useAppSelector((state) => state.displaySkill.value[DisplayDefense]);
  const displayQuickness = useAppSelector((state) => state.displaySkill.value[DisplayQuickness]);

  const maxHp = parseInt(displayMaxHp);
  const attack = parseInt(displayAttack);
  const defense = parseInt(displayDefense);
  const quickness = parseInt(displayQuickness);

  return (playerName.length === 0)? false: 
    (!isValidSkill(maxHp) || !isValidSkill(attack) || !isValidSkill(defense) || !isValidSkill(quickness))? false:
    (SkillsTotalMax === maxHp + attack + defense + quickness)? true:false;
};

export const InputSubmitProfile:FC = () => {
  // ボタンの使用可否
  const canNext = validPlayerProfile();

  const linkCss = {
    width: '160px',
  };
  
  return (
    <>
      <input type="submit" value="対戦相手を選ぶ" disabled={!canNext} className={'margin_auto no_border border_round color_white normal_font_size ' + (canNext? 'background_color_blue':'background_color_button_disable')} style={linkCss} />
    </>
  );
};
