const { mysql } = require('../qcloud')

module.exports = async context => {
  var list = await mysql("p_everydayContent").orderBy('createtime', 'desc');
  context.state.data = list;
}