export const API_URL = `http://dummy.restapiexample.com/`;
export const PERMISSION_KEY = 'react-redux-framework';
export const MENU_KEY = 'react-redux-framework';
export const JWT_TOKEN = 'react-redux-framework';
export const LOGGED_IN_USER = 'react-redux-framework';
export const USER_FULL_NAME = 'react-redux-framework';
export const LANGUAGE_KEY = 'react-redux-framework';

let date = new Date();
let year = date.getFullYear();

const APP_CONFIG = {
    brand: 'React REDUX',
    year: year,
    AutoCloseMobileNav: true, // Boolean: true, false. Automatically close sidenav on route change (Mobile only)
    customizer: true, // Boolean: true, false. Customizer will be removed completely when set to false
    showCustomizer: false, // Boolean: true, false. Customizer will be opened (visible) first time app was loaded if set to true
    color: {
        primary: '#1890ff',
        success: '#66BB6A',
        info: '#01BCD4',
        infoAlt: '#948aec',
        warning: '#ffc53d',
        danger: '#ff4d4f',
        text: '#3D4051',
        gray: '#EDF0F1',
    },
    settings: {
        layout: '1', // String: 1, 2, 3, 4 and add your own
        boxedLayout: false, // Boolean: true, false
        fixedSidenav: false, // Boolean: true, false
        fixedHeader: false, // Boolean: true, false
        collapsedNav: false, // Boolean: true, false
        offCanvasNav: false, // Boolean: true, false
        sidenavWidth: 240, // Number
        offCanvasMobileNav: true, // Boolean: true, false. Mobile only, by default, it's true (off canvas)
        colorOption: '34', // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        theme: 'light', // (WIP) String: light, gray, dark
    },
};

export default APP_CONFIG;

//regex
// export const regexAlphabetOnly = /^[A-Za-z]+$/;
// export const regexAlphabetWithSpace = /^[A-Za-z ]+$/;
// export const regexAlphabetWithSpecialCharacters = /^[A-Za-z #'.,\-/()]+$/;
// export const regexAlphaNumeric = /^[A-Za-z0-9]+$/;
// export const regexAlphaNumericWithSpace = /^[A-Za-z0-9 ]+$/;
// export const regexNumberOnly = /^[0-9]+$/;
// export const regexNumberBeginningWithZero = /^[0]{1}[0-9]*$/;
// export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// export const regexAlphaNumericWithSpecialCharacters = /^[A-Za-z0-9 #'.,\-/()]+$/;
//
// export const regexDescription = RegExp(/^[a-zA-Z ]{5,30}$/);
// export const regexCode = RegExp(/^[a-zA-Z]{3,5}$/);
// export const regexCurrencyName = RegExp(/^[a-zA-Z ]{3,50}$/);
// export const regexISOAlpha = /^[A-Za-z]{3}$/;
// export const regexISONumeric = /^[0-9]{3}$/;
// export const regexDecimalDescription = RegExp(/^[a-zA-Z ]{3,20}$/);
// export const regexSanctionId = /^[A-Za-z0-9 \-\/]+$/;
//
// // format
// export const sendingDateFormat = 'YYYY-MM-DD';
// export const dateTimeFormat = 'YYYY-MM-DD HH:mm';
// export const effectiveTimeFormat = 'hh:mm A';
// export const newDateFormat = 'YYYY-MM-DD';
