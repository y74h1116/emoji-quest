import { FC } from "react";
import { PlayerSkillMaxHp, PlayerSkillAttack, PlayerSkillDefense, PlayerSkillQuickness } from "../models/PlayerProfile";
import { DisplayAttack, DisplayDefense, DisplayMaxHp, DisplayQuickness } from "../models/DisplayProfile";
import { InputPlayerSkillPoint } from "./InputPlayerSkillPoint";
import { InputPlayerName } from "./InputPlayerName";
import { SkillPointRest, SkillPointState, SkillPointTotal } from "./SkillPointState";

// プレイヤーの情報入力欄
export const PlayerProfileTable:FC = () => {
  return (
    <table className="margin_auto border_round background_color_blue color_white">
      <tbody>
        <tr>
          <td className="" colSpan={2}>
            <SkillPointState kind={SkillPointTotal}/>
          </td>
        </tr>
        <tr>
          <td className="point_td_border little_font_size" colSpan={2}>
            <SkillPointState kind={SkillPointRest}/>
          </td>
        </tr>
        <tr>
          <td className="point_td_border little_font_size">名前</td>
          <td className="point_td_border">
            <InputPlayerName/>
          </td>
        </tr>
        <tr>
          <td className="point_td_border little_font_size">HP</td>
          <td className="point_td_border padding_all_5">
            <InputPlayerSkillPoint playerSkillKind={PlayerSkillMaxHp} displaySkillKind={DisplayMaxHp}/>
          </td>
        </tr>
        <tr>
          <td className="point_td_border little_font_size">攻撃力</td>
          <td className="point_td_border padding_all_5">
            <InputPlayerSkillPoint playerSkillKind={PlayerSkillAttack} displaySkillKind={DisplayAttack}/>
          </td>
        </tr>
        <tr>
          <td className="point_td_border little_font_size">守備力</td>
          <td className="point_td_border padding_all_5">
            <InputPlayerSkillPoint playerSkillKind={PlayerSkillDefense} displaySkillKind={DisplayDefense}/>
          </td>
        </tr>
        <tr>
          <td className="little_font_size">素早さ</td>
          <td className="padding_all_5">
            <InputPlayerSkillPoint playerSkillKind={PlayerSkillQuickness} displaySkillKind={DisplayQuickness}/>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
