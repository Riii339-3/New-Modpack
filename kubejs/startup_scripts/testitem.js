// Listen to item registry event
StartupEvents.registry('item', event => {
    event.create('test_item').texture('minecraft:item/lava')
  })