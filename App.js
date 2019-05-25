import React, {Component} from 'react';
import Navigator from './src/navigation'

export const prefix = 'deeplink://';

export default class App extends Component {
  render() {
    return <Navigator uriPrefix={prefix} />;
  }
}
