/*let mydata:any;
mydata="Hello"+" "+"welcome typescript"
console.log(mydata);
mydata=12+23;
console.log(mydata);
let mystring :string;
mystring="Welcome to Chennai";
console.log(mystring.slice(0,3));
let myNumber:number;

myNumber=120;

console.log(myNumber.toString()+"my result");*/
/*let mysArray:string[];
let mynArray:number[];
mysArray=["Hello","TypeScript"];
mynArray=[1,2,3,4];
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[1]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}*/
/*let myTuple:[string,number,number]
myTuple=["TypeScript",1,4];
console.log(myTuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let myvar1=null;
myvar1=null;
console.log(myvar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
/*enum myEnum{sunday=0,monday,tuesday,wednesday}
console.log(myEnum.tuesday)
function addfunction(num1:any,num2:any)
{
    console.log(num1+num2);
}
console.log(addfunction(32,32));
function addfunction1(num1:any,num2:any){

}*/
/*interface myInterface
{
    Name:string;
    Title:string;
}
function Ifunction(mydata:myInterface):string
{
    return(mydata.Name+" "+mydata.Title);
}
let dat={Name:"Ravi",Title:"Associate"}
console.log(Ifunction(dat));*/
/*class User
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User Created");
    }
    register()
    {


console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.Age);
    }
    getAge(id:number):number{
        if(this.Id==id) return this.Age;
        else return 0;

    }
}
let firstUser=new User(1,"Ravi","ravi@gmail.com",22)
firstUser.register();
console.log(firstUser.getAge(1));*/
var user = /** @class */ (function () {
    function user(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("usr created");
    }
    user.prototype.Register = function () {
        console.log(this.Name + "SuccesfullyRegistered");
        console.log(this.Id + "" + this.Name + "" + this.Email + "" + this.Age);
    };
    user.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return user;
}());
var cUser = new user(2, "ram", "r@gmail.com", 23);
cUser.Register();
console.log(cUser.getAge(1));
