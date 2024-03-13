"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          category_name: "Household",
          category_description:
            "Help with cleaning, doing laundry, tyding your garden etc.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Social",
          category_description:
            "Hanging out together, exchanging stories, practicing foreign languages etc.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Tech assistance",
          category_description: "Help with your computer/phone/smart devices.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Handywork",
          category_description:
            "All work in and around the house involving tools.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Pets",
          category_description: "Pet sitting, going for walks etc.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Errands",
          category_description: "Running errands, picking up parcels and more.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Shopping & Groceries",
          category_description:
            "Buying your groceries at the supermarket or in other shops.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Babysitting",
          category_description:
            "Taking care of toddlers and children for a short time-period.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
