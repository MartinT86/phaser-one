import { preloadFunction } from './preload-function';
import { createFunction } from './create-function';
import { updateFunction } from './update-function';

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var created;

function preload() {
    preloadFunction(game);
}

function create() {
    created = createFunction(game);
}

function update() {
    updateFunction(game, created.player, created.platforms, created.cursors, created.stars, created.scoreText);
}

export {game};
