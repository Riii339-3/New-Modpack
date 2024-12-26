ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:diamond_plate', 1), // arg 1: output
        [
          '#forge:hammers',
          '#forge:gems/diamond'
        ]
      )
      
})