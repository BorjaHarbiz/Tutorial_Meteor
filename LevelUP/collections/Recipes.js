import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Recipes = new Mongo.Collection('recipes');

/*
Recipes.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
  });
*/

Ingredient = new SimpleSchema({
  name:{
    type : String,
  },
  amount:{
    type : String
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('recipes', function recipesPublication() {
    return Recipes.find({ author: this.userId });
  });
}



Meteor.methods({
  'recipes.insert'(name) {

    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    console.log('insert ' + name);

    Recipes.insert({
      name : name.name,
      desc : name.desc,
      ingredients : name.ingredients,
      createdAt: new Date(),
      author: this.userId,
    });
  }

});



  
/*
RecipeSchema = new SimpleSchema({
  name:{
    type : String,
    label : 'Name',
  },
  desc:{
    type : String,
    label : 'Description',
  },
  ingredients:{
      type: [Ingredient]
  },
  intMenu: {
    type:Boolean,
    defatulValue:false,
    optional:true,
    autoform:{
      type:"hidden"
    }
  }
  author:{
    type : String,
    label : 'Author',
    autoValue:function(){
      return this.userId;
    }
  },
  createdAt:{
    type:Date,
    label: 'CreatedAt',
    autoValue:function(){
      return new Date();
    }
  }
  
});


Recipes.attachSchema('RecipeSchema');


*/