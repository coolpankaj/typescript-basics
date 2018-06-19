class facebookdata{

    //Basic Data
   private name:string;
   private gender:string;
   private interests:string[];
   private about:string;
   private relationship:string;
   private address:string;
   private contact:number[];
   private fbid:number;
   private hobbies:string[];

    // set data
    private  works:object[];
    private checkin:object[];
    private books:object[];


    // constructor to initialise properties of this class
    constructor(name:string,gender:string,interests:string[],about:string,relationship:string,address:string,contact:number[],fbid:number,hobbies:string[]){
        this.name=name;
        this.gender=gender;
        this.interests=interests;
        this.about=about;
        this.relationship=relationship;
        this.address=address;
        this.contact=contact;
        this.fbid=fbid;
        this.hobbies=hobbies;
    }

    setdata=(works:object[],checkin:object[],books:object[]):any=>{
            this.works=works;
            this.checkin=checkin;
            this.books=books;

    }

    getname=()=>{
       return this.name;
    }
    getgender=()=>{
        return this.gender;
    }
    getcontact=()=>{
        return this.contact;
    }
    getworks=()=>{
        return this.works;
    }
    getcheckin=()=>{
        return this.checkin;
    }
    getbooks=()=>{
        return this.books;
    }
}




//======================================friend facebook=========================
class friend extends facebookdata{
    friendlist:object[];
    constructor(name:string,gender:string,interests:string[],about:string,relationship:string,address:string,contact:number[],fbid:number,hobbies:string[],friendlist:object[]){
        super(name,gender,interests,about,relationship,address,contact,fbid,hobbies);
        this.friendlist=friendlist;
    }
        getderiveddata=()=>{

            // it only can accesss friendlist, it can't access other super properties (they are private in parent class)
            return this.friendlist;
        }
        getbasedata=()=>{
            this.getbooks();
        }

}
//==========================================object of first class ==============================

let firstobject = new facebookdata("pankaj","Male",["Front end","Back end","MEAN Satck"],"I am self-motivated programmer","multiple","New Delhi",[12346789,987654321],255895662474,["programming","playing volleyball","listening music"]);
console.log("========================================");
console.log(firstobject);



let experience = [{
    "duration": "1 yr",
    "position": "PHP developer"
},
{
    "duration": "2 yr",
    "position": "software developer" 
}];
let check={
    "main": "Chandigarh",
    "area": "Attari"
}
let book ={
    "name": "Art of exploitation vol. 2",
    "type": "Hacking"
}
firstobject.setdata([experience],[check],[book]);

//=========================after setting new values ====================

console.log("after updated values");
console.log(firstobject);
console.log("========================================");
console.log("get works");
console.log(firstobject.getworks());
console.log("get checkins");
console.log(firstobject.getcheckin());
console.log("get books");
console.log(firstobject.getbooks());

//=======================================================================
let secondobject = new friend("pawan","Male",["coding","web development"],"He is a hard working person","single","Bangalore",[7536985214],123588888,["playing cricket","watching movies"],[{"name":"shikha"},{"name":"kritika"}]);
console.log("=================second object==============================")
console.log(secondobject);

