class tile:
    icon = str
    def __init__(self, skin):
        self.icon = skin

class board:
    board = [str]*9
    def __init__(self, init):
        for i in range(0,9):
            self.board[i] = init
    def check_board(self):
        check = 0
        for i in range(0, 3):
            if self.board[(3*i)] == self.board[(3*i)+1] and self.board[(3*i)+1] == self.board[(3*i)+2]:
                if self.board[(3*i)] == "X":
                    check = 1
                    break
                elif self.board[(3*i)] == "O":
                    check = 2
                    break
                
            if self.board[i] == self.board[i+3] and self.board[i+3] == self.board[i+6]:
                if self.board[(3*i)] == "X":
                    check = 1
                    break
                elif self.board[(3*i)] == "X":
                    check = 2
                    break
        return check



class Player:
    id = int
    moves = int
    tile_skin = str
    def __init__(self, n, skin):
        self.id = n
        self.tile_skin = skin
    def place(self, pos, board):
        # move = tile(self.tile_skin)#skin for tile
        board.board[pos] = self.tile_skin#pos tile on board
        return board



p1 = Player(1, "X")
p2 = Player(2, "O")
count = 0
myboard = board("_")
winner = 0
while winner == 0:
    for i in range(0,9,3):
        print(myboard.board[i+0],myboard.board[i+1],myboard.board[i+2])
    p = input("GIVE POS")
    if int(p) == 0:
        break
    else:
        if count % 2 == 0: #Μπαίνει ανά 2 επαναλήψεις, άρα αποθηκεύει ανα δύο θέσεις αν τα δίνεις στη σειρά
            while myboard.board[int(p)-1] != "_":
                p = input("GIVE pos")
            myboard = p1.place(int(p)-1, myboard)
        else:
            while myboard.board[int(p)-1] != "_":
                p = input("GIVE pos")
            myboard = p2.place(int(p)-1, myboard)
    winner = myboard.check_board()
    
    count += 1
    
for i in range(0,9,3):
    print(myboard.board[i+0],myboard.board[i+1],myboard.board[i+2])
print("Player {} WON".format(winner))
# for j in range(0,3):
#     print("{}{}{}".format(myboard.board[j+(3*0)],myboard.board[j+(3*0)+1],myboard.board[j+(3*0)+2]))
