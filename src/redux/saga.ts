import { all } from "redux-saga/effects";

import { rehydrateSagas } from "./modules/rehydrate/rehydrate";
import { languageSagas } from "./modules/language/language";
import { initSagas } from "./modules/init/init";
import { netInfoSagas } from "./modules/netInfo/netInfo";
import { TStoreRedux } from "./store";

export default function* root(store: TStoreRedux) {
  yield all([
    rehydrateSagas(store),
    languageSagas(),
    initSagas(),
    netInfoSagas(store),
  ]);
}
