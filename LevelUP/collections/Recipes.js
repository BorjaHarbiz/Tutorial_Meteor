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


Meteor.methods({
  'recipes.insert'(name) {

    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    console.log(name);
    console.log(name.name);
    console.log(name.desc);
    debugger;
    
   
    Recipes.insert({
      name : name.name,
      desc : name.desc,
      ingredients : name.ingredients,
      createdAt: new Date(),
      author: this.userId,
    });
  },
  'recipes.remove'(taskId) {
    check(taskId, String);

    const task = Recipes.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Recipes.remove(taskId);
  },
  'recipes.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    const task = Recipes.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Recipes.update(taskId, { $set: { checked: setChecked } });
  },
  'recipes.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Recipes.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Recipes.update(taskId, { $set: { private: setToPrivate } });
  },
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