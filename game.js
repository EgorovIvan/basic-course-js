
let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            } else {
                const nextPoint = mover.getNextPosition(direction);
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    init() {
        console.log("Ваша положение на поле ввиде о");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run()  и нажмите  Enter  ");
    }
};

game.init()