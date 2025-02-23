import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <S.Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255, 0.6)" />}
      <S.TInput {...rest} ref={ref} />
    </S.Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

export default forwardRef(Input);
