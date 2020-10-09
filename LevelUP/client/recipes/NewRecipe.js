

Template.body.onCreated(function bodyOnCreated() {
    console.log("onCreated");
    Meteor.subscribe('recipes');
});

Template.body.helpers({
    recipes() {
        const instance = Template.instance();
        // Show newest recipes at the top
        console.log("helpers Recipe");
        return Recipes.find({}, { sort: { createdAt: -1 } });
    },
   
});
    


Template.NewRecipe.events({
    'submit .new-recipes'(event) {
        // Prevent default browser form submit
        event.preventDefault();
        //Array Json Recipe
        
        var ingredients = [];
        // Get value from form element
        const target = event.target;
        const name = target.name.value;
        const desc = target.desc.value;
        const chekMenu = target.chekMenu.value;


        var recipes = {name:name,
            desc:desc ,
            ingredients:[]}; 

        var countArray = document.getElementsByClassName("arrayClass");

        Array.prototype.forEach.call(countArray, function(item) {
            ingrediente = item.children.ingredient.value;
            cantida = item.children.amount.value;
          
            //Add array Json in Json Recipe
            ingredients.push({name:ingrediente,
                               amount:cantida });
            
        });
        recipes.ingredients = ingredients;
        console.log(ingredients);
        console.log(recipes);

        // Insert a task into the collection
        Meteor.call('recipes.insert', recipes);
        recipes = 

        // Clear form
        target.name.value = '';
        target.desc.value = '';
       
    },
    'change .hide-completed input'(event, instance) {
        instance.state.set('hideCompleted', event.target.checked);
    },
});
