const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL ='mongodb://127.0.0.1:27017/StayEasy';
const Listing =require("./models/listing.js")
const path=require("path"); 
main().then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
})  
async function main() {
  await mongoose.connect(MONGO_URL); 
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))

app.get("/listings",async(req,res)=>{
 const allListings=await Listing.find({}); 
 res.render("listings/index.ejs",{allListings} ) 
});
//new route
app.get("/listings/new",async(req,res) =>{
  res.render("listings/new.ejs");
})
//show route
app.get("/listings/:id",async(req,res)=>{
  let{id}=req.params; 
 const listing=await Listing.findById(id);
 res.render("listings/show.ejs",{listing}); 
});
 // Create Route
 app.post("/listings",async(req,res)=>{
const newListing=new Listing(req.body.listing);
await newListing.save();
res.redirect("/listings");
 })


/* app.get("/testlisting",async(req,res)=>{
  let sampleListing=new Listing({
    title:"NEW Villa",
    description:"BY the ghat",
    price:1200,
    location:"Varanasi",
    country:"India"
  });
  await sampleListing.save();
console.log("sample data is save");
res.send("successful testing")
}) */


app.listen(8060, () => {
  console.log("server is running at port 8060");
});
  