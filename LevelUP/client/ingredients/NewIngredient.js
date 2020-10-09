import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'


import './NewIngredient.html';
import './Ingredient.html';
//import { NewIngredient } from './NewIngredient.html';



Template.body.onCreated(function bodyOnCreated() {
    console.log("onCreated INGREDIENT");
    Session.set('arrayIngredient',[]);
    arr = Session.get('arrayIngredient');
    arr.push({ingredient:"Ingrediente",amount:""});
    Session.set('arrayIngredient',arr);
    Meteor.subscribe('ingredients');
});

Template.NewIngredient.helpers({

    ingCount() {
        return Session.get('arrayIngredient').length;
    },
    arrayIngredient() {
        return Session.get('arrayIngredient');
    }
});

Template.NewIngredient.events({
    "click input[type=submit]": function (e) {
        e.preventDefault();

        if ($(e.target).prop("id") == "addIngredient") {
            arrayIngredient = Session.get('arrayIngredient');
            arrayIngredient.push({ingredient:"",amount:""});
            Session.set('arrayIngredient',arrayIngredient);

        } else if ($(e.target).prop("id") == "removeIngredient") {
            arrayIngredient = Session.get('arrayIngredient');
            arrayIngredient.pop();
            Session.set('arrayIngredient',arrayIngredient);
            
        }
    }

});


/*
Template.NewIngredient.events({
    'submit .add-ingredienteForm'(event) {
        // Prevent default browser form submit
        debugger;
        event.preventDefault();
        console.log(event.type);
        // Get value from form element
        const target = event.target;
        const name = target.name.value;
        if (name = "add"){
            console.log("ADD");
        }else if (name = "remove"){
            console.log("REMOVE");
        }
        // Insert a task into the collection
        //Meteor.call('recipes.insert', target.name.value);

        // Clear form
        //target.name.value = '';
        //target.desc.value = '';

    },

});
*/