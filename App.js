import React, {Component} from 'react';
import Navigator from './src/navigation';

export const prefixString = 'deeplink://';

export const prefixRegExp = /https:\/\/www.deeplink.com\/|deeplink:\/\/deeplink\/|deeplink:\/\//

export default class App extends Component {
  render() {
    return <Navigator uriPrefix={prefixRegExp} />;
  }
}
