// import React from 'react';
// import { moduleName } from 'react-native'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// // import { createDrawerNavigator } from 'react-navigation-drawer';


// const Screen1 = () =>{
//     return(
//         <View>
//             <Text>Đây là màng hình 1</Text>
//         </View>
//     )
// }

// const Screen2 = () =>{
//     return(
//         <View>
//             <Text>Đây là màng hình 2</Text>
//         </View>
//     )
// }

// const AppNavigator = createStackNavigator({
//   Screen1: { screen: Screen1 },
//   Screen2: { screen: Screen2 },
// }, {
//   initialRouteName: 'Screen1',
//   transitionConfig: () => ({
//     transitionSpec: {
//       duration: 300, // Độ dài của hiệu ứng chuyển đổi
//     },
//     screenInterpolator: ({ position, scenes }) => {
//       const { index } = scenes[scenes.length - 1];
//       const translateX = position.interpolate({
//         inputRange: [index - 1, index],
//         outputRange: [100, 0], // Hiệu ứng vuốt từ phải sang trái
//       });

//       return { transform: [{ translateX }] };
//     },
//   }),
// });

// export default createAppContainer(AppNavigator);