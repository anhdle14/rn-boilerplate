import * as React from "react";
import Client from "./libs/services/apollo";
import config from "../config.json";
import i18n from "./libs/services/i18n";
import RootNavigator from "./libs/services/routes";
import { ApolloProvider } from "react-apollo";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { translate } from "react-i18next";

console.log(i18n);

// Apollo Client point to the GraphQL Server

const defaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: config.theme.light.color1,
    accent: config.theme.light.color5
  }
};

const i18nStack = ({ t }: any) => {
  return <RootNavigator screenProps={{ t }} />;
};

const ReloadAppOnLanguageChange = translate("common", {
  bindI18n: "languageChanged",
  bindStore: false,
  wait: true
})(i18nStack);

const App = () => (
  // Wrap the App with ApolloProvider
  <ApolloProvider client={Client}>
    <PaperProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={config.theme.dark.color1}
        translucent={false}
      />
      <ReloadAppOnLanguageChange>
        {/* The Notch fix */}
        <SafeAreaView />
      </ReloadAppOnLanguageChange>
    </PaperProvider>
  </ApolloProvider>
);

export default App;
