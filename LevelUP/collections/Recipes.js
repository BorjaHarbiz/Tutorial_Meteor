import { Meteor } from 'meteor/meteor';

Recipes = new Meteor.Collection('recipes');

Recipes.allow({
    insert(userId,doc) {
        // The user must be logged in and the document must be owned by the user.
        return !!userId;
      },    
});

RecipeSchema = new SimpleSchema({
    name: { 
        type : String,
        label: 'Name'
    },
    desc:{
        type : String,
        label: 'Description'
    },
    author:{
        type : String,
        label: 'Author',
        autoValue: function () {
            return this.userId
        },
        autoform:{
            type : "hidden"
        }
    },
    createdAt:{
        type : Date,
        label: 'Created At',
        autoValue: function () {
            return new Date()
        },
        autoform:{
            type : "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);
