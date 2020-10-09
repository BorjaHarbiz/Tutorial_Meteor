

Template.body.onCreated(function bodyOnCreated() {
    Meteor.subscribe('recipes');
});

Template.body.helpers({
    recipes() {
        const instance = Template.instance();
        // Show newest recipes at the top
        return Recipes.find({}, { sort: { createdAt: -1 } });
    },
   
});
