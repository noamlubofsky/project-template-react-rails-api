import { createGlobalStyle } from 'styled-components';
import ArnoldRegular from './ArnoldRegular.woff';
export default createGlobalStyle`
    @font-face {
        font-family: 'Arnold Regular';
        src: local('Arnold Regular'), local('Arnold Regular'),
        url(${ArnoldRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;