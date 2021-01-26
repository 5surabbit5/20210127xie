class EmitBus {
  ponds = {};
  $on(eventName, func) {
    if (!this.ponds.hasOwnProperty(eventName)) {
      this.ponds[eventName] = [];
    }
    const arr = this.ponds[eventName];
    if (arr.some((item) => item === func)) {
      return;
    }
    arr.push(func);
    // 这样子写导致栈溢出，原因未知
    // for (let i = 0; i < arr.length; i++) {
    //   let item = arr[i];
    //   if (item === func) {
    //     break;
    //   }
    //   arr.push(func);
    // }
  }
  $emit(eventName, ...args) {
    const arr = this.ponds[eventName] || [];
    arr.forEach((event) => event.call(null, ...args));
  }
}
export default new EmitBus();
