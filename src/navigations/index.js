import {App} from './main-navigator';

export default App;


// import * as React from 'react';
// import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
// } from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/Octicons';
// import Ionicon from 'react-native-vector-icons/Ionicons';


// import { deviceRespectedSize } from '../utils/calcaulation';

// function Feed({ navigation }) {
//     return (
//         <>
//             <View
//                 style={{
//                     paddingTop: 8,
//                     paddingBottom: 8,
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     backgroundColor: 'rgb(79,129,189)'
//                 }}>
//                 <TouchableOpacity
//                     style={{
//                         height: 50,
//                         width: 50,
//                         paddingLeft: deviceRespectedSize(5),
//                         paddingTop: 20,
//                     }}>
//                     <Icon
//                         name='three-bars'
//                         size={30}
//                         color='#000'
//                         onPress={() => navigation.toggleDrawer()}
//                     />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={{ paddingTop: 20, paddingRight: deviceRespectedSize(5), }}>
//                     <Icon
//                         name='home'
//                         size={30}
//                         color='#000'
//                         onPress={() => navigation.navigate('home')}
//                     />
//                 </TouchableOpacity>
//             </View>
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Feed Screen</Text>
//                 <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//                 <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//             </View>
//         </>
//     );
// }

// function Notifications() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Notifications Screen</Text>
//         </View>
//     );
// }

// function CustomDrawerContent(props) {
//     const { navigation } = props;
//     return (
//         <DrawerContentScrollView {...props}>
//             <View style={{ alignSelf: 'center' }}>
//                 <Image
//                     style={{
//                         height: deviceRespectedSize(70),
//                         width: deviceRespectedSize(70),
//                         borderRadius: 35,
//                         marginTop: deviceRespectedSize(5),
//                     }}
//                     source={require('../assets/images/pp.jpg')}
//                 />
//             </View>
//             {/* <DrawerItemList {...props} /> */}
//             <DrawerItem
//                 label="Help"
//                 icon={({ focused, color, size }) => <Ionicon color='red' size={20} name={focused ? 'help-circle-outline' : 'help-circle-outline'} />}
//                 onPress={() => navigation.navigate('Notifications')}
//             />
//         </DrawerContentScrollView>
//     );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <Drawer.Navigator
//             drawerStyle={{
//                 backgroundColor: 'rgb(127,127,127)',
//             }}
//             sceneContainerStyle={{
//                 backgroundColor: 'white'
//             }}
//             drawerContentOptions={{
//                 itemStyle: {
//                     backgroundColor: 'rgb(127,127,127)'
//                 },
//                 labelStyle: {
//                     color: 'black'
//                 }
//             }}
//             drawerContent={props => <CustomDrawerContent {...props} />}>
//             <Drawer.Screen name="Feed" component={Feed} />
//             <Drawer.Screen name="Notifications" component={Notifications} />
//         </Drawer.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <MyDrawer />
//         </NavigationContainer>
//     );
// }

