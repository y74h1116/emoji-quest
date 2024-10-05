import { FC } from "react";
import { useRecoilState } from "recoil";
import { playerNameAtom, PlayerNameMaxLength } from "../models/PlayerProfile";

// 名前入力欄
export const InputPlayerName:FC = () => {
  const [playerName, setPlayerNameAtom] = useRecoilState(playerNameAtom);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    // 10文字にする
    const inputSliced = input.slice(0, PlayerNameMaxLength);
    setPlayerNameAtom(inputSliced);
  };

  // css
  const inputPointCss = {
    width: '80px',
  };

  return (
          <input type="text" value={playerName} className="border_round no_border" style={inputPointCss}
              onChange={onChangeName}
              />
  );
};
