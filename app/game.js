import { preloadFunction } from './preload-function';

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    preloadFunction(game);

}

function create() {
    game.add.sprite(0, 0, 'star');
}

function update() {
}

export {game};
