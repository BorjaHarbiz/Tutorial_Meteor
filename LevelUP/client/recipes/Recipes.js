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
    console.log('Recipes onCreated');
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes')
    });

});

Template.Recipes.helpers({
    recipes() {
        // Show newest recipes at the top
        console.log("helpers Recipes");
        console.log(Recipes.find({}).count());
        return Recipes.find({}, { sort: { createdAt: -1 } });
    },

});
