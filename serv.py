from flask import Flask, render_template, jsonify, request
from random import randint

app = Flask(__name__)

class Game:
    def __init__(self):
        self.player1_id = randint(100000, 999999)
        while True:
            self.player2_id = randint(100000, 999999)
            if self.player1_id != self.player2_id:
                break
        self.score = [0, 0]
        self.table = [['?', '?', '?'], ['?', '?', '?'], ['?', '?', '?']]
    def pl_move(self, pl_id, pos_x, pos_y):
        if self.player1_id == pl_id:
            self.table[pos_x, pos_y] = "X"
            status = 1
        elif self.player2_id == pl_id:
            self.table[pos_x, pos_y] = "O"
            status = 1
        else:
            status = 0
        return status
    def get_table(self):
        return self.table

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/example_route')
def example_route():
    parameter = request.args.get("mykey")
    return jsonify({"gay" : "nigger", "myparam" : parameter})

if __name__ == "__main__":
    app.run(debug=True)