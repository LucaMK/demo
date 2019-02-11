function printMsg(msg){
  let txt = msg || 'this is default, you are not input available value msg';
  console.log("this is input msg:",msg);
}

module.exports = printMsg;