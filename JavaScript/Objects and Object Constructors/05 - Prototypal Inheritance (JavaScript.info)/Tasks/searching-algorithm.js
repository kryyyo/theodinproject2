let head = {
  glasses: 1
};

let table = {
  __proto__: head, // answer
  pen: 3
};

let bed = {
  __proto__: table, // answer
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed, // answer
  money: 2000
};

// is it faster to get glasses as pockets.glasses or head.glasses?
/**
 * In modern engines, performance-wise, there is no difference.
 * They remember where the property was found and reuse it in the next request.
 * They are also smart enough to update internal caches if something changes,
 * so that optimization is safe.
 */