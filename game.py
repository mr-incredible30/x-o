
class tile:
    icon = str
    id = 0
    def __init__(self, skin):
        self.icon = skin

class Player:
    id = int
    moves = int
    tile_skin = str
    board = [tile]*10
    def __init__(self, n, skin):
        self.id = n
        self.tile_skin = skin
    def place(self, pos):
        move = tile(self.tile_skin)#skin for tile
        self.board[pos] = move#pos tile on board



p1 = Player(1, "X")
p2 = Player(2, "O")
count = 0
while True:
    p = input("GIVE POS")
    if int(p) == 0:
        break
    else:
        if count % 2 == 0:
            p1.place(int(p))
    count += 1

for j in range(0, 9):
    print(p1.board[j].icon)
