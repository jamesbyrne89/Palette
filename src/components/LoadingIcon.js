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
`;

const LoaderDot = styled.div`
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
`;

const Spinner = styled.svg`
  margin: auto;
  width: 3rem;
  height: 3rem;
  position: relative;
  top: calc(50% - 2rem);
  left: calc(50% - 2rem);
  transform: translate(-50%, -50%);
  animation: spin 3s forwards infinite ease-out;

  @keyframes spin {
    0% {
      transform: rotate(0turn);
    }
    30% {
      transform: rotate(1turn);
    }
    50% {
      transform: rotate(1turn);
    }
    80% {
      transform: rotate(2turn);
    }
    100% {
      transform: rotate(2turn);
    }
  }
  @keyframes switch-top {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(75%);
    }
    80% {
      transform: translateY(75%);
    }
    90% {
      transform: translateX(0px);
    }
  }
  @keyframes switch-bottom {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(-75%);
    }
    80% {
      transform: translateY(-75%);
    }
    90% {
      transform: translateX(0px);
    }
  }
  @keyframes switch-left {
    0% {
      transform: translateX(0px);
    }
    30% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(75%);
    }
    80% {
      transform: translateX(75%);
    }
    90% {
      transform: translateX(0px);
    }
  }
  @keyframes switch-right {
    0% {
      transform: translateX(0px);
    }
    30% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(-75%);
    }
    80% {
      transform: translateX(-75%);
    }
    90% {
      transform: translateX(0px);
    }
  }
`;

const CircleOne = styled.circle`
  animation: switch-top 3s infinite ease-out;
`;
const CircleTwo = styled.circle`
  animation: switch-right 3s infinite ease-out;
`;
const CircleThree = styled.circle`
  animation: switch-bottom 3s infinite ease-out;
`;
const CircleFour = styled.circle`
  animation: switch-left 3s infinite ease-out;
`;

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

const LoadingIcon = props => {
  return (
    <Spinner>
      <CircleOne
        cx="50%"
        cy="12.5%"
        r="12.5%"
        fill="#F249E0"
        class="circle-1"
      />
      <CircleTwo
        cx="87.5%"
        cy="50%"
        r="12.5%"
        fill="#EDE849"
        class="circle-2"
      />
      <CircleThree
        cx="50%"
        cy="87.5%"
        r="12.5%"
        fill="#F73B55"
        class="circle-3"
      />
      <CircleFour
        cx="12.5%"
        cy="50%"
        r="12.5%"
        fill="#52EDFB"
        class="circle-4"
      />
    </Spinner>
  );
};

export default LoadingIcon;
