import posed from 'react-pose';

const fadeConfig = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const openConfig = {
  visible: { opacity: 1, top: '50%' },
  hidden: { opacity: 0, top: '75%' }
};

const Fade = posed.div(fadeConfig);
const OpenToaster = posed.div(openConfig);

export { Fade, OpenToaster };
