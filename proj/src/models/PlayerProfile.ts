import { CharacterProfile } from "./CharacterProfile";
import { PlayerSkillAttack, PlayerSkillDefense, PlayerSkillMaxHp, PlayerSkillQuickness } from "./PlayerProfileSkill";
import { useAppSelector } from "./store";

export const PlayerImageFile = 'bou_nin.png';

// player の情報を取得
export const getPlayerProfile = ():CharacterProfile => {

  const playerName = useAppSelector((state) => state.playerName.value);
  const maxHp = useAppSelector((state) => state.playerSkill.value[PlayerSkillMaxHp]);
  const attack = useAppSelector((state) => state.playerSkill.value[PlayerSkillAttack]);
  const defense = useAppSelector((state) => state.playerSkill.value[PlayerSkillDefense]);
  const quickness = useAppSelector((state) => state.playerSkill.value[PlayerSkillQuickness]);

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
