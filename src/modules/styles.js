const defaultStyleOptions = {
  fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  background: '#ffffff',
  title: '#000000',
  subtitle: '#718096',
  primary: '#38b2ac',
  primaryHover: '#319795',
  opposite: '#ffffff'
}

const getStyles = (options = {}) => {
  let styles = defaultStyleOptions;
  ['fontFamily', 'background', 'title', 'subtitle'].forEach(key => {
    if (options[key]) {
      styles[key] = options[key]
    }
  })
  if (options.primary) {
    styles.primary = options.primary
    styles.primaryHover = getHover(options.primary)
    styles.opposite = getOpposite(options.primary)
  }
  ['primaryHover', 'opposite'].forEach(key => {
    if (options[key]) {
      styles[key] = options[key]
    }
  })
  return styles
}

const getHover = (color) => {
  const percent = 7

  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 - percent) / 100);
  G = parseInt(G * (100 - percent) / 100);
  B = parseInt(B * (100 - percent) / 100);

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

const getOpposite = (hex) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
  // http://stackoverflow.com/a/3943023/112731
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
}

export const applyStyles = (element, options) => {
  let styles = getStyles(options.theme)
  element.style.setProperty('--simplegoals-font-family', styles.fontFamily);
  element.style.setProperty('--simplegoals-color-background', styles.background);
  element.style.setProperty('--simplegoals-color-title', styles.title);
  element.style.setProperty('--simplegoals-color-subtitle', styles.subtitle);
  element.style.setProperty('--simplegoals-color-primary', styles.primary);
  element.style.setProperty('--simplegoals-color-primary-hover', styles.primaryHover);
  element.style.setProperty('--simplegoals-color-opposite', styles.opposite);
}