const mongoose = require('mongoose');
const Ninja = mongoose.model('Ninja');

class Ninjas{
  index(req, res){
    Ninja.find({}, function(err, ninjas){
      if(err){
        console.log("Returned errors", err);
        res.json({message: "error", error: err})
      }else{
        res.json({message: "success", data: ninjas})
      }
    })
  }
  getOne(req, res){
    var ninja_id = req.params.id;
    Ninja.find({_id : ninja_id}, function(err, ninja){
      if(err){
        console.log("returned errors", err);
      }else{
        res.json({data: ninja })
      }
    })
  }
  create(req, res){
    let ninja = new Ninja(req.body);
    ninja.save(function(err){
      console.log(err);
      res.json("ok");
    });
  }
  update(req, res){
    Ninja.findByIdAndUpdate(req.params.id, req.body,{runValidators: true}, (err,ninja) =>{
    });
    res.json("updated")
  }
  delete(req, res){
    Ninja.findByIdAndDelete(req.params.id, function(err){
      res.json("deleted")
    });
  }
}
module.exports = new Ninjas();