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
import {CategorizeText} from "../utils/CategorizeText";

async function testCategorize() {
  let binOutput = "";
  let numTokens = 0;
  let kws = "CS Social Good Board Meeting Social Impact";
  let tags = "Philosophy, CS, Piano, Food, Fun, Sustainability";
  [binOutput, numTokens] = await CategorizeText(kws, tags);
  console.log("tags: ", tags);
  console.log("OUTPUT: ", binOutput);
  console.log("tokens: ", numTokens);
  tags = "Philosophy, Piano, Food, Sustainability";
  [binOutput, numTokens] = await CategorizeText(kws, tags);
  console.log("tags: ", tags);
  console.log("OUTPUT: ", binOutput);
  console.log("tokens: ", numTokens);
  tags = "Philosophy, Piano, Sustainability";
  [binOutput, numTokens] = await CategorizeText(kws, tags);
  console.log("tags: ", tags);
  console.log("OUTPUT: ", binOutput);
  console.log("tokens: ", numTokens);
}

const ProfileScreen = () => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`font-bold`}>Andrew Kuik</Text>
      <Text>Hi I am Andrew, I enjoy...</Text>
      <Text>Interests: </Text>

      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={testCategorize}>
        <Text style={styles.appButtonText}>Test Categorizer</Text>
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
