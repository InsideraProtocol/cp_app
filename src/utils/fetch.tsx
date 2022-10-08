import axios, { AxiosError, AxiosRequestConfig } from "axios";

import config from "../config";
import { i18next } from "../localization";
import { selectLanguage } from "../redux/modules/language/language";
import { Language } from "../utils/language";
import { put, select } from "redux-saga/effects";
import { AlertMode } from "../utils/alert";

export type FetchResult<Data> = {
  result: Data;
  status: number;
};

export function fetch<Data, Form = any>(
  url,
  options: AxiosRequestConfig<Form> = {},
  baseUrl?: string
): Promise<FetchResult<Data>> {
  return new Promise((resolve, reject) => {
    const axiosUrl = `${baseUrl ?? config.baseUrl}${url}`;

    return axios(axiosUrl, {
      ...options,
      timeout: 10000,
    })
      .then((res) => {
        if (config.debugFetch) {
          console.log(axiosUrl, res.data, "res is here", res.status);
        }
        if (res.status) {
          if (res.status.toString().split("")[0] === "2") {
            return resolve({
              result: res.data.result || res.data,
              status: res.status,
            });
          } else {
            return reject(res);
          }
        } else {
          return reject({
            message: "errors.INTERNET",
            translate: true,
          });
        }
      })
      .catch((e) => {
        if (config.debugFetch) {
          console.log(JSON.parse(JSON.stringify(e)), e, "error inside fetch");
        }
        reject(e);
      });
  });
}

export function* sagaFetch<Data, Form = any>(
  url,
  options: AxiosRequestConfig<Form> = {},
  baseUrl?: string
) {
  // * @PUT-TOKEN

  // const { token } = yield select((state: TReduxState) => state.token);
  // if (token) {
  //   options = {
  //     ...options,
  //     headers: {
  //       ...(options.headers || {}),
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  // }

  // const isConnected: boolean = yield selectNetInfo();
  //
  // if (!isConnected) {
  //   const {locale}: Language = yield selectLanguage();
  //   const message = i18next.t('errors.INTERNET', {lng: locale});
  //   showAlert({
  //     title: 'errors.error',
  //     message,
  //   });
  //   return Promise.reject(new Error(message));
  // }

  return yield fetch<Data, Form>(url, options, baseUrl);
}

export type ClientError = {
  status?: number;
  message?: string;
};

export const handleFetchError = (e: AxiosError<ClientError>): ClientError => {
  const { message, response } = e;
  const { status, data } = response || {};

  const _message = data?.message ?? message;

  return {
    status,
    message: _message,
  };
};

export type HandleSagaFetchErrorOptions = {
  showErrorAlert?: boolean;
  type?: AlertMode;
};

export function* handleSagaFetchError(
  e: AxiosError<ClientError>,
  options: HandleSagaFetchErrorOptions = {}
) {
  const { showErrorAlert = true, type } = options;
  const { locale }: Language = yield selectLanguage();
  const { message, status } = handleFetchError(e);
  if (showErrorAlert && message && message?.length) {
    toast?.show(Array.isArray(message) ? message[0] : message, {
      title: status
        ? i18next.t(`errors.${status}`, { lng: locale })
        : undefined,
      type: type || undefined,
    });
  }

  if (status === 401) {
    // * LOGOUT
  }
}
