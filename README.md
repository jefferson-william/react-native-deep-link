# deeplink

Projeto sobre react-native com deep link já configurado e funcionando.

* react@16.8.3
* react-native@0.59.8
* react-native-gesture-handler@^1.2.1
* react-navigation@^3.11.0

### Comandos

```bash
adb shell am start -W -a android.intent.action.VIEW -d "https://www.deeplink.com/home" com.deeplink
adb shell am start -W -a android.intent.action.VIEW -d "https://www.deeplink.com/user/1" com.deeplink
adb shell am start -W -a android.intent.action.VIEW -d "deeplink://home" com.deeplink
adb shell am start -W -a android.intent.action.VIEW -d "deeplink://user/1" com.deeplink

xcrun simctl openurl booted "deeplink://user"
xcrun simctl openurl booted "deeplink://user/1"
```

### Referências

-   https://reactnavigation.org/docs/en/deep-linking.html
-   https://developer.android.com/training/app-links/deep-linking#java
-   https://github.com/react-navigation/react-navigation/issues/4887
-   https://readybytes.in/blog/universal-links-in-react-native-ios-9-and-plus
