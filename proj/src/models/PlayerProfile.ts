import { atom, atomFamily, useRecoilValue } from "recoil";
import { CharacterProfile } from "./CharacterProfile";
import { SkillMin } from "./SkillPoint";

export const PlayerNameDefault = '棒人形';
export const PlayerNameMaxLength = 10;
export const PlayerImageFile = 'bou_nin.png';

export const playerNameAtom = atom<string>({
  key: 'playerNameAtom',
  default: PlayerNameDefault,
});

// 第一引数にatomそのものの型,第二引数に引数の型を指定
export const playerSkill = atomFamily<number, string>({
  key: 'playerSkill',
  default: SkillMin,
});

export const PlayerSkillMaxHp = 'PlayerSkillMaxHp';
export const PlayerSkillAttack = 'PlayerSkillAttack';
export const PlayerSkillDefense = 'PlayerSkillDefense';
export const PlayerSkillQuickness = 'PlayerSkillQuickness';

// player の情報を取得
export const getPlayerProfileFromAtom = ():CharacterProfile => {
  const playerName = useRecoilValue(playerNameAtom);
  const maxHp = useRecoilValue(playerSkill(PlayerSkillMaxHp));
  const attack = useRecoilValue(playerSkill(PlayerSkillAttack));
  const defense = useRecoilValue(playerSkill(PlayerSkillDefense));
  const quickness = useRecoilValue(playerSkill(PlayerSkillQuickness));

  const playerProfile:CharacterProfile ={
    name: playerName,
    imageFile: PlayerImageFile,
    visual: null,
    hp: 0,
    maxHp: maxHp,
    attack: attack,
    defense: defense,
    quickness: quickness,
  };

  return playerProfile;
};
