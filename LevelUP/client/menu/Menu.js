import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/Recipes';

import './Menu.js';
import './Menu.html';

Template.Menu.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes')
    });

});

Template.Menu.helpers({
    recipes() {
        return Recipes.find({ checkMenu : true}, { sort: { createdAt: -1 } });
    },

});
