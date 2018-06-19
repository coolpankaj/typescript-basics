var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebookdata = /** @class */ (function () {
    // constructor to initialise properties of this class
    function facebookdata(name, gender, interests, about, relationship, address, contact, fbid, hobbies) {
        var _this = this;
        this.setdata = function (works, checkin, books) {
            _this.works = works;
            _this.checkin = checkin;
            _this.books = books;
        };
        this.getname = function () {
            return _this.name;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getcontact = function () {
            return _this.contact;
        };
        this.getworks = function () {
            return _this.works;
        };
        this.getcheckin = function () {
            return _this.checkin;
        };
        this.getbooks = function () {
            return _this.books;
        };
        this.name = name;
        this.gender = gender;
        this.interests = interests;
        this.about = about;
        this.relationship = relationship;
        this.address = address;
        this.contact = contact;
        this.fbid = fbid;
        this.hobbies = hobbies;
    }
    return facebookdata;
}());
//======================================friend facebook=========================
var friend = /** @class */ (function (_super) {
    __extends(friend, _super);
    function friend(name, gender, interests, about, relationship, address, contact, fbid, hobbies, friendlist) {
        var _this = _super.call(this, name, gender, interests, about, relationship, address, contact, fbid, hobbies) || this;
        _this.getderiveddata = function () {
            // it only can accesss friendlist, it can't access other super properties (they are private in parent class)
            return _this.friendlist;
        };
        _this.getbasedata = function () {
            _this.getbooks();
        };
        _this.friendlist = friendlist;
        return _this;
    }
    return friend;
}(facebookdata));
//==========================================object of first class ==============================
var firstobject = new facebookdata("pankaj", "Male", ["Front end", "Back end", "MEAN Satck"], "I am self-motivated programmer", "multiple", "New Delhi", [12346789, 987654321], 255895662474, ["programming", "playing volleyball", "listening music"]);
console.log("========================================");
console.log(firstobject);
var experience = [{
        "duration": "1 yr",
        "position": "PHP developer"
    },
    {
        "duration": "2 yr",
        "position": "software developer"
    }];
var check = {
    "main": "Chandigarh",
    "area": "Attari"
};
var book = {
    "name": "Art of exploitation vol. 2",
    "type": "Hacking"
};
firstobject.setdata([experience], [check], [book]);
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
var secondobject = new friend("pawan", "Male", ["coding", "web development"], "He is a hard working person", "single", "Bangalore", [7536985214], 123588888, ["playing cricket", "watching movies"], [{ "name": "shikha" }, { "name": "kritika" }]);
console.log("=================second object==============================");
console.log(secondobject);
