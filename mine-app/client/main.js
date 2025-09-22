import { Template } from "meteor/templating";
import { Wallets } from "../imports/api/wallets.js";
import "./main.html";
import "./main.css";

Meteor.subscribe("wallets");

// ✅ Display wallets in template
Template.body.helpers({
  wallets() {
    return Wallets.find({});
  },
});
