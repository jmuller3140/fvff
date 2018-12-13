import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import * as fonts from "../../fonts";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Raleway-Bold;
        src: local('Raleway-Bold'), url('${fonts.RalewayBoldWOFF}') format('woff');
        src: local('Raleway-Bold'), url('${fonts.RalewayBoldWOFF2}') format('woff2'),
        local('Raleway-Bold'), url('${fonts.RalewayBoldTTF}') format('truetype')
        local('Raleway-Bold'), url('${fonts.RalewayBoldOTF}') format('otf');
    }
    @font-face {
        font-family: Raleway-Regular;
        src: local('Raleway-Regular'), url('${fonts.RalewayRegularWOFF}') format('woff');
        src: local('Raleway-Regular'), url('${fonts.RalewayRegularWOFF2}') format('woff2'),
        local('Raleway-Regular'), url('${fonts.RalewayRegularTTF}') format('truetype')
        local('Raleway-Regular'), url('${fonts.RalewayRegularOTF}') format('otf');
    @font-face {
        font-family: Moon-Light;
        src: local('MoonLight'), url('${fonts.MoonLightWOFF}') format('woff');
        src: local('MoonLight'), url('${fonts.MoonLightWOFF2}') format('woff2'),
        local('MoonLight'), url('${fonts.MoonLightTTF}') format('truetype')
        local('MoonLight'), url('${fonts.MoonLightOTF}') format('otf');
    }
    @font-face {
        font-family: Moon-Bold;
        src: local('Moon-Bold'), url('${fonts.MoonBoldWOFF}') format('woff');
        src: local('Moon-Bold'), url('${fonts.MoonBoldWOFF2}') format('woff2'),
        local('Moon-Bold'), url('${fonts.MoonBoldTTF}') format('truetype')
        local('Moon-Bold'), url('${fonts.MoonBoldOTF}') format('otf');
    }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;
