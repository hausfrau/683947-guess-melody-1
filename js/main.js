import {changeScreen} from './util';
import {INITIAL_STATE} from './data/game';
import welcomeScreen from './welcome';

changeScreen(welcomeScreen(INITIAL_STATE));
