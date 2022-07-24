const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

const Player = require('../lib/Player.js');
const { JestHook } = require("jest-watcher");

//creates a player object
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
  expect.arrayContaining([expect.any(Object)])
  );
});

//gets stats
test("gets player's stats as an object", () => {
  const player = new Player("Dave");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});

//gets inventory
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

//get health
test("gets player's health value", () => {
  const player = new Player('Dave');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

//is the player alive?
test("checks if the player is alive or not", () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();  

  player.health = 0;

  expect(player.isAlive()).toBeFalsy(); 
});

test("subtract from the players health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});