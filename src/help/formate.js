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

export function addDate (date, days) {
  var d = new Date(date.replace(/-/g, '/'))
  d.setDate(d.getDate() + days)
  var month = d.getMonth() + 1
  var day = d.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  var val = d.getFullYear() + '-' + month + '-' + day
  return val
}

