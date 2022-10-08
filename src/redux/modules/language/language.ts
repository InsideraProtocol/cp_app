import { Language, languages, Locale } from "../../../utils/language";
import { i18next } from "../../../localization";
import { select, takeEvery } from "redux-saga/effects";
import { useAppSelector } from "../../../hooks/useStore";
import { TReduxState } from "../../../redux/store";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = (locale: Locale) => ({
  type: CHANGE_LANGUAGE,
  language: languages[locale],
});

export const languageInitialState: Language = languages.en;

type Action = {
  type: string;
  language: Language;
};
export const language = (
  state: Language = languageInitialState,
  action: Action
): Language => {
  if (action?.type === CHANGE_LANGUAGE) {
    return action.language;
  }
  return state;
};

export function* watchChangeLanguage(action: Action) {
  yield i18next.changeLanguage(action.language.locale);
}

export function* languageSagas() {
  yield takeEvery(CHANGE_LANGUAGE, watchChangeLanguage);
}

export function* selectLanguage() {
  return yield select((state: TReduxState) => state.language);
}

export function useLanguage() {
  return useAppSelector((state) => state.language);
}
