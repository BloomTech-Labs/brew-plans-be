exports.seed = function(knex, Promise) {
  return knex("seeded_recipes").insert([
    {
      title: "Pour Over",
      instructions:
        "Bring at least 600 grams(20 oz) of water to a boil.////Place a filter in the dripper and pre-wet filter.////Place brewer over cup or carafe, add 30 grams ground coffee, and tap to level surface.////Pour 60 grams of water, ensuring all grounds are saturated.////30 Wait 30 seconds, then pour 90 grams of water in a spiral from the middle to the filter and back to the middle.////50 Wait 50 seconds, then pour 100 grams of water in the same pattern as the previous pour.////Once the water has drained, pour an additional 100 grams of water.////Enjoy!",
      brew_type: "Brew Plans",
      water_temp: 205,
      coarseness: "Medium"
    },
    {
      title: "Aeropress",
      instructions:
        "Bring 200 grams (7 oz) of water to a boil. Weigh out 17 grams of coffee (depending on your preferred strength).////Insert a paper filter, pre-wet the filter and cap, then assemble the aeropress and add the ground coffee.////Add 34 grams of water ensuring the coffee is evenly saturated. //// 30 Wait 30 seconds, then add the remaining hot water to fill the chamber////60 Wait 1 minute, then stir the grounds 10 times to agitate////Fasten the cap, flip the whole assembly over with haste and control. Position it atop your brew vessel and begin applying downward pressure. Your coffee is fully brewed once it begins to make a hissing sound.",
      brew_type: "Brew Plans",
      water_temp: 200,
      coarseness: "Medium-fine"
    },
    {
      title: "Moka Pot",
      instructions: 
        "Pour freshly boiled water into the bottom of the Moka pot////Fill the pot’s filter basket with the ground coffee, and give it a shake to settle the grounds evenly. Now place it into the bottom compartment.////Screw on the Moka pot’s spouted top, being careful not to burn yourself touching the bottom.////Place the pot on a stove set to medium heat.////When the water in the bottom chamber approaches a boil, the pressure will push a stream of coffee slowly and methodically through the upper chamber. If it explodes upward, your water’s too hot, if it burbles lethargically, turn up your flame. You know it’s done when you hear a hissing, bubbling sound.",
      brew_type: "Brew Plans",
      water_temp: 212,
      coarseness: "Fine"
    },
    {
      title: "French Press",
      instructions:
        "To start, gently pour twice the amount of water than you have coffee onto your grounds. You should use 1:12 coffee to water ratio, the exact amount is based on the size of your french press.////Give the grounds a gentle stir with a bamboo paddle or chopstick. Allow the coffee to bloom for 30 seconds.////30 Wait 30 seconds, then pour the remaining water and place the lid gently on top of the grounds. ////240 Wait 4 minutes, then push the plunger down and serve immediately or tranfer to a different vessel to ensure the coffee does not become over-extracted.",
      brew_type: "Brew Plans",
      water_temp: 195,
      coarseness: "Coarse"
    }
  ]);
};
