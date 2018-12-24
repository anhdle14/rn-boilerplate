import { AppRegistry } from "react-native";
import App from "./src";
import * as app from "./app.json";

AppRegistry.registerComponent(app.name, () => App);
