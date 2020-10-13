import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/Recipes';



Template.RecipeSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });

});

Template.RecipeSingle.helpers({
    recipe() {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    },

});