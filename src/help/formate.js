/**
 * Created by CY on 2016/1/30.
 */
export function FormateNum (s, prefix) {
  if (prefix === undefined) {
    prefix = ''
  }
  if (s === null || s === undefined) {
    return '-'
  }
  s = s.toString()
  var re = /(\d)(\d{3},)/
  if (s.indexOf('.') === -1) {
    if (/[^0-9\.\-]/.test(s)) {
      return '0'
    }
    s = s.replace(/^(-)?(\d*)$/, '$1$2.')
    s = (s + '00').replace(/(-)?(\d*\.\d\d)\d*/, '$1$2')
    s = s.replace('.', ',')
    while (re.test(s)) {
      s = s.replace(re, '$1,$2')
    }
    s = s.replace(/,(\d\d)$/, '.$1')
    s = prefix + s.replace(/^\./, '0.')
    return s.replace('.00', '')
  }
  if (/[^0-9\.\-]/.test(s)) {
    return '0'
  }
  s = s.replace(/^(-)?(\d*)$/, '$1$2.')
  s = (s + '00').replace(/(-)?(\d*\.\d\d)\d*/, '$1$2')
  s = s.replace('.', ',')
  re = /(\d)(\d{3},)/
  while (re.test(s)) {
    s = s.replace(re, '$1,$2')
  }
  s = s.replace(/,(\d\d)$/, '.$1')
  return prefix + s.replace(/^\./, '0.')
}

export function formatDateTime (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

