import {State} from './reducer';

export const getCount = (state: State) => state.counter.count;
