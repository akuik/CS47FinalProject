import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const ProfileScreen = () => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`text-3xl font-bold`}>Profile</Text>
      <Text style={tw`font-bold`}>Andrew Kuik</Text>
      <Text>Hi I am Andrew, I enjoy...</Text>
      {/* Create a template for a profile */}
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
