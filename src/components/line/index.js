import React, { PureComponent } from 'react';
import { View } from 'react-native';

import styles from './styles';

export default class Line extends PureComponent {
  render() {
    let { color: borderColor, type: borderStyle } = this.props;

    if ('none' === borderStyle) {
      return null;
    }

    let lineStyle = {
      borderColor,
      borderStyle,
    };

    return (
      <View style={[styles.line, lineStyle]} pointerEvents='none' />
    );
  }
}
