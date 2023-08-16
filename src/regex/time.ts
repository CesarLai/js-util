/**
 * 时间格式正则表达式
 */
const timeFormatRegex = /^(yyyy)(-|\.|\/)(M{1,2})(-|\.|\/)(d{1,2})(\s|T)?(H{1,2})?(:m{1,2})?(:s{1,2})?$/;

/**
 * 为小于10的数字添加前缀0
 */
const padZero: (num: number) => string = (num) => {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('数字格式有误');
  }

  return num < 10 ? `0${num}` : String(num);
};

/**
 * 时间格式化输出方法
 *
 * @param {*} time Date对象
 * @param {string} format 格式化模板，支持以下格式：
 * yyyy-MM-dd
 * yyyy-MM-dd HH
 * yyyy-MM-dd HH:mm
 * yyyy-MM-dd HH:mm:ss
 * yyyy/MM/dd HH:mm:ss
 * yyyy.MM.dd HH:mm:ss
 * yyyy-M-d H
 * yyyy-M-d H:m
 * yyyy-M-d H:m:s
 * yyyy/M/d H:m:s
 * yyyy.M.d H:m:s
 */
const toString = (time: Date, format?: string): string | null => {
  if (!time) {
    throw new Error('时间对象为空');
  }

  const _year: string | number = time.getFullYear();
  let _month: string | number = time.getMonth() + 1;
  let _date: string | number = time.getDate();
  let _hour: string | number = time.getHours();
  let _minute: string | number = time.getMinutes();
  let _second: string | number = time.getSeconds();

  if (!format) {
    return `${_year}-${padZero(_month)}-${padZero(_date)} ${padZero(
      _hour,
    )}:${padZero(_minute)}:${padZero(_second)}`;
  } else if (!timeFormatRegex.test(format)) {
    return null;
  } else {
    const regexResults = timeFormatRegex.exec(format);

    // 是否包括月份
    if (regexResults && regexResults[3]) {
      _month = `${regexResults[2]}${
        _month < 10 && regexResults[3].length === 2 ? padZero(_month) : _month
      }`;
    } else {
      _month = '';
    }

    // 是否包括日期
    if (regexResults && regexResults[5]) {
      _date = `${regexResults[4]}${
        _date < 10 && regexResults[5].length === 2 ? padZero(_date) : _date
      }`;
    } else {
      _date = '';
    }

    // 是否包括小时
    if (regexResults && regexResults[7]) {
      _hour = `${regexResults[6]}${
        _hour < 10 && regexResults[7].length === 2 ? padZero(_hour) : _hour
      }`;
    } else {
      _hour = '';
    }

    // 是否包括分钟
    if (regexResults && regexResults[8]) {
      _minute = `:${
        _minute < 10 && regexResults[8].length === 3
          ? padZero(_minute)
          : _minute
      }`;
    } else {
      _minute = '';
    }

    // 是否包括秒
    if (regexResults && regexResults[9]) {
      _second = `:${
        _second < 10 && regexResults[9].length === 3
          ? padZero(_second)
          : _second
      }`;
    } else {
      _second = '';
    }

    return `${_year}${_month}${_date}${_hour}${_minute}${_second}`;
  }
};

/**
 * 时间扩展工具
 */
const TimeUtil = {
  toString,
};

export default TimeUtil;
