var Vehicle = function (license="", vendor="", age=0, cost=30000) {
    this.license = license;
    this.vendor = vendor;
    this.age = age;
    this.cost = cost;

    this.estValue = function() {
        return (1-Math.tanh(this.age/10))*this.cost;
    }

}

//Problem: Functions in objects are costly