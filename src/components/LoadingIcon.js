import React from 'react';
import '../styles/styles.css';
import styled from 'styled-components';

const Loader = styled.div`
position: absolute;
top: 1em;
left: 0;
right: 0;
margin: auto;
width: 75px;
height: 16px;
text-align: center;
`

const LoaderDot = styled.div `
width: 12px;
height: 12px;
background: #fff;
border-radius: 50%;
float: left;
margin: 0 5px;
-webkit-transform: scale(0);
transform: scale(0);
-webkit-animation: fx 800ms ease infinite 0ms;
animation: fx 800ms ease infinite 0ms;
&:nth-child(2) {
    -webkit-animation: fx 800ms ease infinite 200ms;
    animation: fx 800ms ease infinite 3s;
}
&:nth-child(3) {
    -webkit-animation: fx 800ms ease infinite 400ms;
    animation: fx 800ms ease infinite 600ms;
}
`

// .loader {

//     @-webkit-keyframes fx {
//         50% {
//             -webkit-transform: scale(1);
//             transform: scale(1);
//             opacity: 1;
//         }
//         100% {
//             opacity: 0;
//         }
//     }
//     @keyframes fx {
//         50% {
//             -webkit-transform: scale(1);
//             transform: scale(1);
//             opacity: 1;
//         }
//         100% {
//             opacity: 0;
//         }
//     }
// }

const LoadingIcon = (props) => {

    return (
        <Loader>
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
       </Loader>
    );
}

export default LoadingIcon;
