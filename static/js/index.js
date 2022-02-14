const size = 3;
let score = [0,0];
let c = document.getElementById("nigger").children;
let m = document.getElementById("win_mes");
let s = document.getElementById("sc");

var game_id;
var player_id;

async function createGame() {
    let response = await fetch('/new_game');
    let data = await response.json();

    game_id = data.game_id;
    player_id = data.player_id;

    document.getElementById("game_id").innerHTML = `Game ID: ${game_id}`;
    document.getElementById("gameButtons").style.display = 'none';
}

async function joinGame() {
    let id = document.getElementById("game_id_field").value;
    let response = await fetch(`/join_game?game_id=${id}`);
    if (response.ok) {
        let data = await response.json();
        game_id = id;
        player_id = data.player_id;

        document.getElementById("game_id").innerHTML = `Game ID: ${game_id}`;
        document.getElementById("gameButtons").style.display = 'none';
    }
}

function buttonPressed(row, col) {
    console.log(`Button on row ${row} and col ${col} pressed`);
    fetch(`/move?game_id=${game_id}&player_id=${player_id}&pos_x=${row}&pos_y=${col}`);
}

function setPlayed(row, col) {
    c[row].children[col].children[0].setAttribute("disabled", "");
}

function set_game(){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let el = document.createElement("button");
            el.innerHTML = "?";
            el.onclick = function (e) {
                buttonPressed(i, j);
            }
            c[i].children[j].appendChild(el);
        }
    }
    let h = document.createElement("h3");
    h.innerHTML = "Player 1| "+score[0]+" | "+score[1]+" |Player 2 ";
    sc.appendChild(h);
}

async function update_board(){
    if (!game_id) return;
    let response = await fetch(`/get_game_board?game_id=${game_id}`)
    let board = await response.json();
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            c[i].children[j].children[0].innerHTML = board[i][j];
        }
    }    
}
set_game();

setInterval(function() {
    update_board();
}, 1000);
