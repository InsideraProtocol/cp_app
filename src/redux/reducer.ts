import { combineReducers } from "redux";

import { theme } from "./modules/theme/theme";
import { language } from "./modules/language/language";
import { initReducer } from "./modules/init/init";
import { netInfoReducer } from "./modules/netInfo/netInfo";
import { clientAuth } from "./modules/auth/clientAuth";

const appReducer = combineReducers({
  clientAuth,
  theme,
  language,
  init: initReducer,
  netInfo: netInfoReducer,
});

export default appReducer;
