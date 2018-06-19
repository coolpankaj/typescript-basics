class youtube_CHANNEL {
    private channelID: number;
    private channelNAME: string;
    private channelDesc: string;
    private channelCategory: string;
    private channelSubscribers: number;
    private channelEarning: number;
    private startDate: number;

    // constructor to initialis class properties
    constructor(channelID: number, channelNAME: string, channelDesc: string, channelCategory: string, channelSubscribers: number, channelEarning: number, startDate: number) {
        this.channelID = channelID;
        this.channelNAME = channelNAME;
        this.channelDesc = channelDesc;
        this.channelCategory = channelCategory;
        this.channelSubscribers = channelSubscribers;
        this.channelEarning = channelEarning;
        this.startDate = startDate;
    }
    private getbasedata = (): any => {
        return this.channelID;
        return this.channelNAME;
        return this.channelDesc;
        return this.channelCategory;
        return this.channelSubscribers;
        return this.channelEarning;
        return this.startDate;
    }

    setchannelID = (channelID:number)=>{
        this.channelID = channelID;
    }

    setchannelname = (channelNAME:string)=>{
        this.channelNAME = channelNAME;
    }
    setchannelDesc = (channelDesc:string)=>{
        this.channelDesc = channelDesc;
    }
    
}
//================================INHERITANCE==============================

class restAPI extends youtube_CHANNEL {
    constructor(channelID: number, channelNAME: string, channelDesc: string, channelCategory: string, channelSubscribers: number, channelEarning: number, startDate: number, private playlistNumber: number, private playlistNAME: string, private playlistAuthor: string, private numberofVideos: number, private totalViews: number, private videoLikes: number) {
        super(channelID, channelNAME, channelDesc, channelCategory, channelSubscribers, channelEarning, startDate);
        this.playlistNumber = playlistNumber;
        this.playlistNAME = playlistNAME;
        this.playlistAuthor = playlistAuthor;
        this.numberofVideos = numberofVideos;
        this.totalViews = totalViews;
        this.videoLikes = videoLikes;
    }
    getderivedData = (): any => {
        /* return this.channelID;
         return this.channelNAME;
         return this.channelDesc;       // they are private in parent class
         return this.channelCategory;
         return this.channelSubscribers;
         return this.channelEarning; 
         return this.startDate;  */
        return this.playlistNumber;
        return this.playlistNAME;
        return this.playlistAuthor;
        return this.numberofVideos;
        return this.totalViews;
        return this.videoLikes;
    }
    /* getdata=()=>{
        this.getbasedata()  // getdata() is private in parent class so can't access
    } */

    setnewnumber=(playlistNumber:number)=>{
        this.playlistNumber = playlistNumber;
    }
    setnewnNAME=(playlistNAME:string)=>{
        this.playlistNAME = playlistNAME;
    }
    setnewAuthor=(playlistAuthor:string)=>{
        this.playlistAuthor = playlistAuthor;
    }
  
}
let firstChannel = new youtube_CHANNEL(1, "tasty-tuts (main-channel)", "This channel provides engg. tutorials", "Education", 5000, 10000, 2005);

console.log("first channel object");
console.log(firstChannel);

let secondChannel = new restAPI(1.1, "restAPI (sub-channel)", "Tutorials for rest APIs", "Education", 1000, 5500, 2015, 3, "Restapi Tuts", "Pankaj", 43, 23000, 8900);

console.log("second channel object");
console.log(secondChannel);


console.log(`==================================================================`)
console.log("update channel id");

firstChannel.setchannelID(5);

console.log("update channel name");
firstChannel.setchannelname("Engg. tutorials");

console.log("update channel description");
firstChannel.setchannelDesc("This channel provide engg. tutorials");
console.log(firstChannel);
console.log(`==================================================================`)
console.log("update playlist number");
secondChannel.setnewnumber(78);

console.log("update playlist name");
secondChannel.setnewnNAME("web development");

console.log("updating author ");
secondChannel.setnewAuthor("R K Sharma");


console.log(secondChannel);


