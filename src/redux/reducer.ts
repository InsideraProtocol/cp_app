import { combineReducers } from "redux";

import { theme } from "./modules/theme/theme";
import { language } from "./modules/language/language";
import { initReducer } from "./modules/init/init";
import { netInfoReducer } from "./modules/netInfo/netInfo";

const appReducer = combineReducers({
  theme,
  language,
  init: initReducer,
  netInfo: netInfoReducer,
});

export default appReducer;
