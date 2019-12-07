import axios from 'axios';
import { push } from 'connected-react-router';

import {
    API_URL,
    JWT_TOKEN,
    USER_FULL_NAME,
    LOGGED_IN_USER,
    PERMISSION_KEY,
    MENU_KEY,
} from '../constants/appConfig';
import { http404Error, http500Error } from '../actions/httpErrorAction';
import configureStore from '../store/configureStore';
import { setLocalStorage, clearLocalStorage } from './storageUtil';

const store = configureStore();

export const httpBase = () => {
    const api = axios.create({
        baseURL: `${API_URL}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'X-XSRF-TOKEN': getLocalStorage(JWT_TOKEN),
            // Lang: getLocalStorage(LANGUAGE_KEY),
        },
        responseType: 'json',
    });

    api.interceptors.response.use(
        response => {
            if (response.headers && response.headers['x-xsrf-token']) {
                setLocalStorage(JWT_TOKEN, response.headers['x-xsrf-token']);
            }
            return response;
        },
        error => {
            if (401 === error.response.status) {
                clearLocalStorage(JWT_TOKEN);
                clearLocalStorage(USER_FULL_NAME);
                clearLocalStorage(LOGGED_IN_USER);
                clearLocalStorage(PERMISSION_KEY);
                clearLocalStorage(MENU_KEY);
                store.dispatch(push('/'));
            }
            if (404 === error.response.status) {
                store.dispatch(http404Error());
                store.dispatch(push('/404'));
            }
            if (500 === error.response.status) {
                store.dispatch(http500Error());
                store.dispatch(push('/500'));
            }
            return Promise.reject(error);
        }
    );

    return api;
};
