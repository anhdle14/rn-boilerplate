export default api => {
  const env = {
    production: {
      plugins: ["react-native-paper/babel"]
    }
  };
  const presets = ["module:metro-react-native-babel-preset"];
  api.cache(true);
  return {
    env,
    presets
  };
};
