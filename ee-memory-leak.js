function Request() {
    var self = this;
    this.bigData = new Array(1e6).join('*');
}

setInterval(function () {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);
