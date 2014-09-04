'use strict';

var Mongo  = require('mongodb');

function Product(){
}

Object.defineProperty(Product, 'collection', {
  get: function(){return global.mongodb.collection('products');}
});

Product.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Product.collection.findOne({_id:_id}, cb);
};

Product.findAll = function(cb){
  Product.collection.find().toArray(cb);
};

/*Product.prototype.update = function(o, cb){
  this.email = o.email;
  this.age   = o.age * 1;
  this.photo = o.photo;

  product.collection.save(this, cb);
};*/

module.exports = Product;

