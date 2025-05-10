import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const PlayerNameDefault = '棒人形';
export const PlayerNameMaxLength = 10;

interface PlayerName {
  value: string;
}
const initialState: PlayerName = {
  value: PlayerNameDefault,
}

export const playerNameSlice = createSlice({
  name: 'playerName',
  initialState,
  reducers: {
    updatePlayerName: (
      state,
      action: PayloadAction<{ name: string }>
    ) => {
      state.value = action.payload.name;
    },
  },
});

export const { updatePlayerName } = playerNameSlice.actions;
