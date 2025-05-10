import { FC } from "react";
import { PlayerNameMaxLength, updatePlayerName } from "../models/PlayerProfileName";
import { useAppSelector, useAppDispatch } from "../models/store";

// 名前入力欄
export const InputPlayerName:FC = () => {
  const playerName = useAppSelector((state) => state.playerName.value);
  const appDispatch = useAppDispatch();

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    // 10文字にする
    const inputSliced = input.slice(0, PlayerNameMaxLength);
    // 変更を反映
    appDispatch(updatePlayerName({ name: inputSliced }));
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
