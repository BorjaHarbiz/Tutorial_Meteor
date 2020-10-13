import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import { Recipes } from '../../collections/Recipes';

import './Recipe.js';
import './Recipe.html';


Template.Recipe.events({
    'click .toggle-menu' : function() {
        console.log(this._id, this.checkMenu)
        Meteor.call('recipe.setCheckedMenu', this._id, this.checkMenu);
    } 
});