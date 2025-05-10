import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { playerNameSlice } from './PlayerProfileName';
import { playerSkillSlice } from './PlayerProfileSkill';
import { displaySkillSlice } from './DisplayProfile';

export const store = configureStore({
  reducer: {
    playerName: playerNameSlice.reducer,
    displaySkill: displaySkillSlice.reducer,
    playerSkill: playerSkillSlice.reducer,
  },
});

export const useAppDispatch:() => typeof store.dispatch
  = useDispatch;

export const useAppSelector: TypedUseSelectorHook< ReturnType<typeof store.getState> >
  = useSelector;

