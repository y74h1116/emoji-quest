import { FC } from "react";
import { useRecoilValue } from "recoil";
import { DisplayAttack, DisplayDefense, DisplayMaxHp, DisplayQuickness, displaySkill } from "../models/DisplayProfile";
import { isValidSkill, SkillsTotalMax } from "../models/SkillPoint";
import { playerNameAtom } from "../models/PlayerProfile";

export const validPlayerProfile = () => {
  const playerName = useRecoilValue(playerNameAtom);

  const displayMaxHp = useRecoilValue(displaySkill(DisplayMaxHp));
  const displayAttack = useRecoilValue(displaySkill(DisplayAttack)); 
  const displayDefense = useRecoilValue(displaySkill(DisplayDefense));
  const displayQuickness = useRecoilValue(displaySkill(DisplayQuickness));

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
