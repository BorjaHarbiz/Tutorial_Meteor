import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/Recipes';

import './ShoppingList.js';
import './ShoppingList.html';

Template.ShoppingList.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes')
    });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({ checkMenu : true}, { sort: { createdAt: -1 } });
    },

});
