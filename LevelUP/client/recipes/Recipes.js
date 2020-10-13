import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/Recipes';

import './Recipes.js';
import './Recipes.html';

/*
Template.body.onCreated(function bodyOnCreated() {
    console.log('SUBS recipes');
    Meteor.subscribe('recipes');
});
*/

Template.Recipes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes')
    });

});

Template.Recipes.helpers({
    recipes() {
        return Recipes.find({}, { sort: { createdAt: -1 } });
    },

});

Template.Recipes.events({
   'click .new-recipe': () => {
        Session.set('newRecipe', true);
   },

});

