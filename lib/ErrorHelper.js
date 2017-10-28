import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    error: PropTypes.string,
    errorPaddingTop: PropTypes.number,
    errorColor: PropTypes.string,
    errorFontSize: PropTypes.number,
    isRTL: PropTypes.bool
  }

  static defaultProps = {
    errorPaddingTop: 8,
    errorColor: '#fc1f4a',
    errorFontSize: 12,
    isRTL: false
  }

  render() {
    let { error, errorColor, errorPaddingTop, errorFontSize, isRTL } = this.props
    return (
      <Text
        style={{
          textAlign: isRTL ? 'right' : 'left',
          paddingTop: errorPaddingTop,
          color: errorColor,
          fontSize: errorFontSize
        }}>
        {error}
      </Text>
    )
  }
}
