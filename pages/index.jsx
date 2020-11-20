import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../styles/button.module.css';

/**
 *
 * Button
 *
 */
function Button(props) {
  const {
    children,
    buttonWrapperStyleClass,
    buttonStyleClass,
    childStyleClass,
    type,
    size,
    onClick,
    ...restButtonProps
  } = props;

  let buttonClass = styles.button;
  buttonClass += classnames({
    [` ${styles.buttonWithIcon}`]: type === 'withIcon',
    [` ${styles.buttonPrimary}`]: type === 'primary',
    [` ${styles.buttonDisabled}`]: type === 'disabled',
  });
  buttonClass += classnames({
    [` ${styles.buttonExtraLarge}`]: size === 'extraLarge',
  });

  let childClass = styles.buttonChildren;
  childClass += classnames({
    [` ${styles.buttonText}`]: typeof (children) === 'string',
  });
  childClass += classnames({
    [` ${styles.buttonChildrenForPrimary}`]: ['primary', 'disabled'].indexOf(type) > -1,
  });

  return (
    <span className={buttonWrapperStyleClass}>
      <button
        className={`${buttonClass} ${buttonStyleClass}`}
        disabled={type === 'disabled'}
        onClick={onClick}
        type="button"
        {...restButtonProps}
      >
        <span className={`${childClass} ${childStyleClass}`}>{children}</span>
      </button>
    </span>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonWrapperStyleClass: PropTypes.string,
  buttonStyleClass: PropTypes.string,
  childStyleClass: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'default',
    'disabled',
    'withIcon',
  ]),
  size: PropTypes.oneOf([
    'default',
    'extraLarge',
  ]),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonWrapperStyleClass: '',
  buttonStyleClass: '',
  childStyleClass: '',
  type: 'default',
  size: 'default',
};

export default memo(Button);
