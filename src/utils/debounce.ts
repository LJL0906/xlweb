/**
 * 创建一个防抖函数，用于在连续触发时只执行一次回调
 * @param callback 需要被防抖的回调函数
 * @param time 可选参数，指定防抖的时间间隔，默认为500毫秒
 * @returns 返回一个新的函数，该函数将在满足防抖条件时调用原始回调
 */
// eslint-disable-next-line no-unused-vars
const debounceFn = <T extends (...args: any[]) => void>(
  callback: T,
  time?: number,
) => {
  // 初始化一个Map对象作为状态管理，用于存储定时器
  const map = new Map<string, NodeJS.Timeout | null>()
  map.set('timer', null)

  // 返回一个新的函数，接受任意参数
  return (...args: Parameters<T>) => {
    let timer: NodeJS.Timeout | null

    // 检查map中是否已经存在定时器
    if (map.has('timer')) {
      timer = map.get('timer')!
    } else {
      // 如果不存在，初始化一个定时器并存入map
      timer = null
      map.set('timer', null)
    }

    // 定义初始化状态，设置一个新的定时器
    const initState = () => {
      // 设置定时器，到期后删除map中的定时器
      const newTimer = setTimeout(() => {
        map.delete('timer')
      }, time ?? 500)
      map.set('timer', newTimer)
    }

    // 如果定时器存在，则清除它，并重新初始化状态
    if (timer) {
      clearTimeout(timer)
      initState()
      return
    }

    // 初始化状态，然后立即执行回调函数
    initState()
    return callback(...args)
  }
}

export default debounceFn
