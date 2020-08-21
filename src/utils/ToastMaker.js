import Toast from 'react-native-root-toast';

const toastMaker = message =>
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    animation: true,
    visible: true,
    // position: 50,
    shadow: false,
    animation: false,
    hideOnPress: true
  });

export default toastMaker;