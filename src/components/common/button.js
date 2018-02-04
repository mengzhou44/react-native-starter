import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from './_colors';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: colors.blue,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.blue,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
