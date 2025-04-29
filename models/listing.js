const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:String,
    image:{
        type: Schema.Types.Mixed,
        default:"https://th.bing.com/th/id/OIP.5J0tR-6rhxKbMvOXi97yHQHaCz?rs=1&pid=ImgDetMain",
        set:(v)=> v===""?"https://plus.unsplash.com/premium_photo-1740997621838-faaec5fa62d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    price:Number,
    location:String,
    country:String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
