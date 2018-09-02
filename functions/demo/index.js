// 云函数入口函数
exports.main = (event, context) => {
  return {
    sum: event.a + event.b
  }
}