// Define a collection to hold our tasks
Firms = new Mongo.Collection("firms");

var Schemas = {};

Schemas.Firm = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 40
    // },
    // author: {
    //     type: String,
    //     label: "Author"
    // },
    // copies: {
    //     type: Number,
    //     label: "Number of copies",
    //     min: 0
    // },
    // lastCheckedOut: {
    //     type: Date,
    //     label: "Last date this book was checked out",
    //     optional: true
    // },
    // summary: {
    //     type: String,
    //     label: "Brief summary",
    //     optional: true,
    //     max: 1000
    }
});

//attach SimpleSchema to Firms
Firms.attachSchema(Schemas.Firm);

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}