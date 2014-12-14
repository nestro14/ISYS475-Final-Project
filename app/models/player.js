// Example model
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  	CATEGORY : String,
    NAME:{type:String, unique:true},
    ATT: Number,
    COMP:Number,
    PCT:Number,
    YDS:Number,
    AVG:Number,
    "YDS/G":Number,
    LONG:Number,
    TD:Number,
    "TD%":Number
});

PlayerSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Player', PlayerSchema);

