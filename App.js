import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "./components/Header";
import "react-native-url-polyfill/auto";
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tabs.Navigator>
        <Tabs.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => <Icon name="home" size={20} />,
          }}
        />
        <Tabs.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: "",
            tabBarLabel: "Search",
            tabBarIcon: ({tintColor}) => <Icon name="search" size={20} />,
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: "",
            tabBarLabel: "Profile",
            tabBarIcon: ({tintColor}) => (
              <Icon name="person-circle-outline" size={20} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
