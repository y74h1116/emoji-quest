export const SkillsTotalMax = 100;
export const SkillMin = 1;
export const SkillMax = 99;

// スキルのバリデーション
export const isValidSkill = (skillPoint: number) => {
  // 数字でないなら無効
  if (isNaN(skillPoint)) {
    return false;
  }
  // 最小最大のチェック
  if ((SkillMin <= skillPoint) && (skillPoint <= SkillMax)) {
    return true;
  } else {
    return false;
  }
}
