var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, age, seats, kl, ft, production, img, price) {
        this.name = name;
        this.age = age;
        this.seats = seats;
        this.kl = kl;
        this.ft = ft;
        this.production = production;
        this.img = img;
        this.price = price;
    }
    Vehicle.prototype.output = function () {
        car.innerHTML += "<div class=\"  col-sm-12 col-md-6 col-lg-3 m-4\">\n        \t<img width=\"300px\" height=\"300px\" src=\"" + this.img + "\" alt=\"\">\n        \t<h2 class=\"text-center text-danger\">" + this.name + "<h2>\n        \t<p class=\"h5 ml-4\">Age:" + this.age + " <br> Seats: " + this.seats + " <br> Kilometer: " + this.kl + "<br>Fuel type: " + this.ft + "<br>Year: " + this.production + "<p>\n        \t<h2 class=\"text-center\">Price: " + this.price + "<h2>\n\n        </div>";
    };
    return Vehicle;
}());
var arr = [new Vehicle("Audi", 20, 4, 120000, "Diesel", 1995, "audi.jpg", "€ 25.000"),
    new Vehicle("Mercedes", 10, 4, 10000, "Diesel", 2005, "mercedes.jpg", "€ 35.000"),
    new Vehicle("Fiat", 10, 4, 20000, "Benzin", 2000, "mercedes.jpg", "€ 15.000"),
];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    one = arr_1[_i];
    one.output();
}
// let arr1=arr.filter(d => d.seats=== 4)
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(name, age, seats, kl, ft, horsepower) {
        var _this = _super.call(this, name, age, seats, kl, ft) || this;
        _this.horsepower = horsepower;
        return _this;
    }
    return Motor;
}(Vehicle));
var arr2 = [new Vehicle("ferrari", 21, 2, 25000, "benzin", 2018, "ferrari.jpg", 230),
    new Vehicle("lambo", 20, 3, 12000, "diesel", 2018, "lambo.jpg", 200),
    new Vehicle("bugatti", 10, 2, 20000, "diesel", 2015, "bugatti.jpg", 230)
];
for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
    two = arr2_1[_a];
    two.output();
}
$("#choose").on("change", function () {
    if (this.value == "begin") {
        $("#car").empty();
        for (var _i = 0, arr2_2 = arr2; _i < arr2_2.length; _i++) {
            two = arr2_2[_i];
            two.output();
        }
        for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
            one = arr_2[_a];
            one.output();
        }
    }
    else if (this.value == "car") {
        $("#car").empty();
        for (var _b = 0, arr2_3 = arr2; _b < arr2_3.length; _b++) {
            two = arr2_3[_b];
            two.output();
        }
    }
    else {
        $("#car").empty();
        for (var _c = 0, arr_3 = arr; _c < arr_3.length; _c++) {
            one = arr_3[_c];
            one.output();
        }
    }
});
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, age, seats, kl, ft, doors) {
        var _this = _super.call(this, name, age, seats, kl, ft) || this;
        _this.doors = doors;
        return _this;
    }
    return Truck;
}(Vehicle));
$("#btn").on("click", function () {
    var input = $("#search").val();
    result = [];
    result1 = [];
    result = arr.filter(function (x) { return x.name.toLowerCase().startsWith(input.toLowerCase()); });
    result1 = arr2.filter(function (x) { return x.name.toLowerCase().startsWith(input.toLowerCase()); });
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        one = result_1[_i];
        $("#car").empty();
        soutput(result);
    }
    for (var _a = 0, result1_1 = result1; _a < result1_1.length; _a++) {
        one = result1_1[_a];
        $("#car").empty();
        soutput(result1);
    }
});
function soutput() {
    car.innerHTML += "<div class=\"  col-sm-12 col-md-6 col-lg-3 m-4\">\n        \t<img width=\"300px\" height=\"300px\" src=\"" + one.img + "\" alt=\"\">\n        \t<h2 class=\"text-center text-danger\">" + one.name + "<h2>\n        \t<p class=\"h5 ml-4\">Age:" + one.age + " <br> Seats: " + one.seats + " <br> Kilometer: " + this.kl + "<br>Fuel type: " + this.ft + "<br>Year: " + this.production + "<p>\n        \t<h2 class=\"text-center\">Price: " + one.price + "<h2>\n\n        </div>";
}
