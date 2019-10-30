
class Vehicle{

	constructor(name,age,seats,kl,ft,production,img,price){
		this.name= name;
		this.age= age;
		this.seats=seats;
		this.kl=kl;
		this.ft=ft;
		this.production=production;
		this.img=img;
		this.price=price;
	}

 output(){

		car.innerHTML +=`<div class="  col-sm-12 col-md-6 col-lg-3 m-4">
        	<img width="300px" height="300px" src="${this.img}" alt="">
        	<h2 class="text-center text-danger">${this.name}<h2>
        	<p class="h5 ml-4">Age:${this.age} <br> Seats: ${this.seats} <br> Kilometer: ${this.kl}<br>Fuel type: ${this.ft}<br>Year: ${this.production}<p>
        	<h2 class="text-center">Price: ${this.price}<h2>

        </div>`;
	}

} 
let arr=[ new Vehicle("Audi",20,4,120000,"Diesel",1995,"audi.jpg","€ 25.000"),
	 new Vehicle("Mercedes",10,4,10000,"Diesel",2005,"mercedes.jpg","€ 35.000"),
	 new Vehicle("Fiat",10,4,20000,"Benzin",2000,"mercedes.jpg","€ 15.000"),

	 
]
for(one of arr){
	
	one.output();}

// let arr1=arr.filter(d => d.seats=== 4)

class Motor extends Vehicle{
	constructor(name, age, seats,kl,ft,horsepower){
		super(name,age,seats,kl,ft);
		this.horsepower= horsepower;
	}
}
let arr2=[ new Vehicle("ferrari",21,2,25000,"benzin",2018,"ferrari.jpg",230)
	new Vehicle("lambo",20,3,12000,"diesel",2018,"lambo.jpg",200),
	 new Vehicle("bugatti",10,2,20000,"diesel",2015,"bugatti.jpg",230)
]
for(two of arr2){
	
	two.output();}

$("#choose").on ("change",function () {
	if (this.value == "begin"){
		$(`#car`).empty();
	for(two of arr2){
	
	two.output();}
	for(one of arr){
	
	one.output();}

	}

else if (this.value == "car"){ 
	$(`#car`).empty();
	for(two of arr2){
	
	two.output();}
} 
else{
	$(`#car`).empty();
	for(one of arr){
	
one.output();}

}
})


class Truck extends Vehicle{
	constructor(name, age, seats,kl,ft,doors){
		super(name, age, seats,kl,ft);
		this.doors= doors;
	}
}

$("#btn").on("click",function(){
	var input=$("#search").val();
	result =[];
	result1 =[];
	result= arr.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
	result1= arr2.filter(x => x.name.toLowerCase().startsWith(input.toLowerCase()));
for(one of result){
	$(`#car`).empty();
soutput(result);
}
for(one of result1){
	$(`#car`).empty();
soutput(result1);}
 function soutput(){

		car.innerHTML +=`<div class="  col-sm-12 col-md-6 col-lg-3 m-4">
        	<img width="300px" height="300px" src="${one.img}" alt="">
        	<h2 class="text-center text-danger">${one.name}<h2>
        	<p class="h5 ml-4">Age:${one.age} <br> Seats: ${one.seats} <br> Kilometer: ${this.kl}<br>Fuel type: ${this.ft}<br>Year: ${this.production}<p>
        	<h2 class="text-center">Price: ${one.price}<h2>

        </div>`;
	}





})

