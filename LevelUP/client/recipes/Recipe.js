import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import { Recipes } from '../../collections/Recipes';

import './Recipe.js';
import './Recipe.html';


Template.Recipe.events({
    'click .toggle-menu' : function() {
        Meteor.call('recipe.setCheckedMenu', this._id, this.checkMenu);
    },
    'click .fa-trash' : function() {
        Meteor.call('removeRecipe', this._id);
    },
    'click .fa-pencil' : function() {
        Session.set('editMode', !Session.get('editMode'));
        Meteor.call('findEdit', this._id);
    }
});