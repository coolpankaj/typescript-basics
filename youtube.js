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
var youtube_CHANNEL = /** @class */ (function () {
    // constructor to initialis class properties
    function youtube_CHANNEL(channelID, channelNAME, channelDesc, channelCategory, channelSubscribers, channelEarning, startDate) {
        var _this = this;
        this.getbasedata = function () {
            return _this.channelID;
            return _this.channelNAME;
            return _this.channelDesc;
            return _this.channelCategory;
            return _this.channelSubscribers;
            return _this.channelEarning;
            return _this.startDate;
        };
        this.setchannelID = function (channelID) {
            _this.channelID = channelID;
        };
        this.setchannelname = function (channelNAME) {
            _this.channelNAME = channelNAME;
        };
        this.setchannelDesc = function (channelDesc) {
            _this.channelDesc = channelDesc;
        };
        this.channelID = channelID;
        this.channelNAME = channelNAME;
        this.channelDesc = channelDesc;
        this.channelCategory = channelCategory;
        this.channelSubscribers = channelSubscribers;
        this.channelEarning = channelEarning;
        this.startDate = startDate;
    }
    return youtube_CHANNEL;
}());
//================================INHERITANCE==============================
var restAPI = /** @class */ (function (_super) {
    __extends(restAPI, _super);
    function restAPI(channelID, channelNAME, channelDesc, channelCategory, channelSubscribers, channelEarning, startDate, playlistNumber, playlistNAME, playlistAuthor, numberofVideos, totalViews, videoLikes) {
        var _this = _super.call(this, channelID, channelNAME, channelDesc, channelCategory, channelSubscribers, channelEarning, startDate) || this;
        _this.playlistNumber = playlistNumber;
        _this.playlistNAME = playlistNAME;
        _this.playlistAuthor = playlistAuthor;
        _this.numberofVideos = numberofVideos;
        _this.totalViews = totalViews;
        _this.videoLikes = videoLikes;
        _this.getderivedData = function () {
            /* return this.channelID;
             return this.channelNAME;
             return this.channelDesc;       // they are private in parent class
             return this.channelCategory;
             return this.channelSubscribers;
             return this.channelEarning;
             return this.startDate;  */
            return _this.playlistNumber;
            return _this.playlistNAME;
            return _this.playlistAuthor;
            return _this.numberofVideos;
            return _this.totalViews;
            return _this.videoLikes;
        };
        /* getdata=()=>{
            this.getbasedata()  // getdata() is private in parent class so can't access
        } */
        _this.setnewnumber = function (playlistNumber) {
            _this.playlistNumber = playlistNumber;
        };
        _this.setnewnNAME = function (playlistNAME) {
            _this.playlistNAME = playlistNAME;
        };
        _this.setnewAuthor = function (playlistAuthor) {
            _this.playlistAuthor = playlistAuthor;
        };
        _this.playlistNumber = playlistNumber;
        _this.playlistNAME = playlistNAME;
        _this.playlistAuthor = playlistAuthor;
        _this.numberofVideos = numberofVideos;
        _this.totalViews = totalViews;
        _this.videoLikes = videoLikes;
        return _this;
    }
    return restAPI;
}(youtube_CHANNEL));
var firstChannel = new youtube_CHANNEL(1, "tasty-tuts (main-channel)", "This channel provides engg. tutorials", "Education", 5000, 10000, 2005);
console.log("first channel object");
console.log(firstChannel);
var secondChannel = new restAPI(1.1, "restAPI (sub-channel)", "Tutorials for rest APIs", "Education", 1000, 5500, 2015, 3, "Restapi Tuts", "Pankaj", 43, 23000, 8900);
console.log("second channel object");
console.log(secondChannel);
console.log("==================================================================");
console.log("update channel id");
firstChannel.setchannelID(5);
console.log("update channel name");
firstChannel.setchannelname("Engg. tutorials");
console.log("update channel description");
firstChannel.setchannelDesc("This channel provide engg. tutorials");
console.log(firstChannel);
console.log("==================================================================");
console.log("update playlist number");
secondChannel.setnewnumber(78);
console.log("update playlist name");
secondChannel.setnewnNAME("web development");
console.log("updating author ");
secondChannel.setnewAuthor("R K Sharma");
console.log(secondChannel);
