// requires: extendedcrafting
// requires: create

/**
 * Generates a custom shaped recipe for the ExtendedCrafting mod.
 * 
 * @author tizu69 <https://github.com/tizu69>
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 * @param {Internal.RecipesEventJS} event - The event object
 * @param {string} output - The output, as an item ID string
 * @param {number} outputQuantity - The quantity of the output
 * @param {string[]} arrangement - The arrangement of the ingredients on the table
 * @param {object} ingredientKeys - The keys representing the ingredients on the table, like a crafting table recipe
 * @param {string} recipeId - The ID of the recipe
 * @param {boolean} lock - Whether the recipe should require a specified tier
 * @param {number?} tierNumber - Tier number 1-4
 */
function extendedTableShaped(event, output, outputQuantity, arrangement, ingredientKeys, recipeId, lock, tierNumber) {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: lock ? tierNumber : 0,
        pattern: arrangement,
        key: ingredientKeys,
        result: Item.of(output, outputQuantity).toJson(),
    }).id(recipeId)
}

ServerEvents.recipes(event => {
      extendedTableShaped(event, 'extendedcrafting:crystaltine_ingot', 4, material_crystaltine_pattern, {
        L: 'minecraft:lapis_lazuli',
        D: 'minecraft:diamond',
        A: 'minecraft:iron_ingot',
        N: 'minecraft:nether_star',
        F: 'minecraft:gold_ingot'
    }, 'extendedcrafting:crystaltine_ingot')
})
