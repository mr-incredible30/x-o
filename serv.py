from flask import Flask, render_template, jsonify, request, redirect
from random import randint

app = Flask(__name__)
games = {}

class Game:
    def __init__(self):
        self.game_id = str(randint(1000,9999))
        self.player1_id = str(randint(100000, 999999))
        while True:
            self.player2_id = str(randint(100000, 999999))
            if self.player1_id != self.player2_id:
                break
        self.score = [0, 0]
        self.table = [['?', '?', '?'], ['?', '?', '?'], ['?', '?', '?']]
        self.p1_played = False


    def pl_move(self, pl_id, pos_x, pos_y):
        if self.player1_id == pl_id and not self.p1_played:
            self.table[pos_x][pos_y] = "X"
            status = 1
            self.p1_played = True
        elif self.player2_id == pl_id and self.p1_played:
            self.table[pos_x][pos_y] = "O"
            status = 1
            self.p1_played = False
        else:
            status = 0
        return status

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new_game')
def new_game():
    game = Game()
    games[game.game_id] = game
    return jsonify({"game_id": game.game_id, "player_id": game.player1_id})

@app.route('/join_game')
def join_game():
    game_id = request.args.get("game_id")
    game = games[game_id]
    return jsonify({"player_id": game.player2_id})

@app.route('/get_game_board')
def get_game_board():
    game_id = request.args.get("game_id")
    game = games[game_id]
    return jsonify(game.table)

@app.route('/move')
def move():
    game_id = request.args.get("game_id")
    player_id = request.args.get("player_id")
    pos_x = int(request.args.get("pos_x"))
    pos_y = int(request.args.get("pos_y"))
    games[game_id].pl_move(player_id, pos_x, pos_y)
    return "OK"

if __name__ == "__main__":
    app.run(debug=True)