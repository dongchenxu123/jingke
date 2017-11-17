export const pageLimit = 5

export const JmJsBridge = window. JmJsBridge

export function formatDate(date, type) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    let str = ''
    switch (type) {
        case 'date':
            str = dateStr
            break;
        case 'time':
            str = timeStr
            break;
        default:
            str= `${dateStr} ${timeStr}`
            break;
    }
    return str;
  }

export  function rejectPromise(msg) {
    return Promise.reject(msg);
}