import { Meteor } from 'meteor/meteor';
import { Recipes } from '../collections/Recipes.js';

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('recipes', function(){
      console.log('Published')
      return Recipes.find({author: this.userId});
    });
  }else{
      console.log("Not server");
  }