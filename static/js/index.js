const size = 3;
let score = [0,0];
let c = document.getElementById("nigger").children;
let m = document.getElementById("win_mes");
let s = document.getElementById("sc");
let turn = 0;

function buttonPressed(row, col) {
    console.log(`Button on row ${row} and col ${col} pressed`);
    setPlayed(row, col);
    let win = check_win();
    if (win == 1){
        console.log(`Player 1 Won!`);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                c[i].children[j].children[0].setAttribute("disabled", "");
            }
        }
        let w = document.createElement("h1");
        w.innerHTML = "Player 1 Won";
        m.appendChild(w);
        score[0]++;
    }
    else if (win == 2){
        console.log(`Player 2 Won!`);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                c[i].children[j].children[0].setAttribute("disabled", "");
            }
        }
        let w = document.createElement("h1");
        w.innerHTML = "Player 2 Won";
        m.appendChild(w);
        score[1]++;
    }
}

function setPlayed(row, col) {
    c[row].children[col].children[0].setAttribute("disabled", "");
    c[row].children[col].children[0].innerHTML = turn % 2 == 0 ? "X" : "O";
    /*
    if (turn % 2 == 0) vale X
    else vale O
    */
    turn++;
}

function check_win(){
    let win = 0;
    for (let i = 0; i < size; i++) {
        if (c[i].children[0].children[0].innerHTML == c[i].children[1].children[0].innerHTML && c[i].children[1].children[0].innerHTML == c[i].children[2].children[0].innerHTML){
            if (c[i].children[0].children[0].innerHTML == "X"){
                win = 1;
                break;
            }
            else if (c[i].children[0].children[0].innerHTML == "O"){
                win = 2;
                break;
            }
        }
        if (c[0].children[i].children[0].innerHTML == c[1].children[i].children[0].innerHTML && c[1].children[i].children[0].innerHTML == c[2].children[i].children[0].innerHTML){
            if (c[0].children[i].children[0].innerHTML == "X"){
                win = 1;
                break;
            }
            else if (c[0].children[i].children[0].innerHTML == "O"){
                win = 2;
                break;
            }
        }               
    }    
    if (c[0].children[0].children[0].innerHTML == c[1].children[1].children[0].innerHTML && c[1].children[1].children[0].innerHTML == c[2].children[2].children[0].innerHTML){
        if (c[0].children[0].children[0].innerHTML == "X"){
            win = 1;
        }
        else if (c[0].children[0].children[0].innerHTML == "O"){
            win = 2;
        }
    }
    else if (c[0].children[2].children[0].innerHTML == c[1].children[1].children[0].innerHTML && c[1].children[1].children[0].innerHTML == c[2].children[0].children[0].innerHTML){
        if (c[0].children[2].children[0].innerHTML == "X"){
                win = 1;
            }
        else if (c[0].children[2].children[0].innerHTML == "O"){
            win = 2;
        }
    }
    return win;
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
function del_game(){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            c[i].children[j].children[0].remove();
        }
    }
    if (m.children.length) m.children[0].remove();
    sc.children[1].remove();
}

let re = document.getElementById('reset');
re.onclick = function(){
    del_game();
    set_game();
}
set_game();

/*let request = fetch('/example_route');
request.then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});*/

async function gay() {
    let parameter = "gaynigger"
    let response = await fetch(`/example_route?mykey=${parameter}`);
    let data = await response.json();
    //console.log(data);
    return data;
}

gay().then(function(data) {
    console.log(data);
});
