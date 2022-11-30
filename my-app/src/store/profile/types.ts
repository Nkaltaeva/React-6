import { type } from '@testing-library/user-event/dist/type';
import { TOGGLE_PROFILE, CHANGE_NAME } from './actions';

export type ProfilerActions = ToggleProfile | ChangeName; 

export interface ToggleProfile {
    type: typeof TOGGLE_PROFILE;
}

export interface ChangeName {
    type: typeof CHANGE_NAME;
    name: string;
}