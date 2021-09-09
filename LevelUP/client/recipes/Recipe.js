import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import { Recipes } from '../../collections/Recipes';

import './Recipe.js';
import './Recipe.html';

Template.Recipe.onCreated(function () {
    this.editMode = new ReactiveVar(false);
    //this.editMode = new ReactiveVar();
    //this.editMode.set(false);
});

Template.Recipe.helpers({
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.Recipe.events({
    'click .toggle-menu' : function() {
        Meteor.call('recipe.setCheckedMenu', this._id, this.checkMenu);
    },
    'click .fa-trash' : function() {
        Meteor.call('removeRecipe', this._id);
    },
    'click .fa-pencil' : function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set(!template.editMode.get());
    }
});