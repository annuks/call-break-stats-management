const mongoose = require ('mongoose');
const callbreakSchema = new mongoose.Schema({
player_one:{
    type: String,
    required:true,
},
player_one_score:[{
    type: Number,
    required:true,
}],
player_two:{
    type: String,
    required:true,
},
player_two_score:[{
    type: Number,
    required:true,
}],
player_three:{
    type: String,
    required:true,
},
player_three_score:[{
    type: Number,
    required:true,
}],
player_four:{
    type: String,
    required:true,
},
player_four_score:[{
    type: Number,
    required:true,
}],

},
{
    timestamps:true,
}
);
const Callbreak = mongoose.model("Callbreak",callbreakSchema);
module.exports = Callbreak;
