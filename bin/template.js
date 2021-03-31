const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    disabled: 'disabled',
    viewBox: '0 0 24 24',
  }
  const fillAttrs = {
    fill: 'actualColor',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, fillAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    const { color, size, disabled, ...otherProps } = props;
    let actualColor = color ? color : disabled ? '#E7E8E9' : '#676869'
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ${ComponentName}.defaultProps = {
    size: '24',
    disabled: false,
  }

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
