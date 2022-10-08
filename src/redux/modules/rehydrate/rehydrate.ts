import { takeEvery } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { TStoreRedux } from "../../store";
import { i18next } from "../../../localization";

export function* watchRehydrate(store: TStoreRedux) {
  const { language } = store.getState();
  if (language.locale !== i18next.language) {
    yield i18next.changeLanguage(language.locale);
  }
}

export function* rehydrateSagas(store: TStoreRedux) {
  yield takeEvery(REHYDRATE, watchRehydrate, store);
}
