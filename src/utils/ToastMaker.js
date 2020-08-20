import Toast from 'react-native-root-toast';

export default ToastMaker = message =>
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    animation:true,
    visibl:false,
    // position:50,
    shadow:false,
    animation:false,
    hideOnPress:true
  });