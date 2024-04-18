import "dotenv/config";
import express from "express";
import cors from "cors";
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

let lastSocketId: string = '';

const random = Math.floor(Math.random()*100+1);
console.log("random", random);

let cpt = 0;

io.on('connection', (socket) => {
  console.log('a user connected');
  lastSocketId = socket.id;
  cpt++;
  if(cpt===3) {
    io.emit('reponse_utilisateurs', true);
  }

  socket.on('number message', (msg) => {
    console.log('every body message: ' + msg);
    if(msg>random) {
    socket.emit('reponse', 'Trop haut');
    }
    else if(msg<random) {
      socket.emit('reponse', 'Trop bas')
    }
    else {
      io.emit('reponse', 'Bravo')
    }
  });

  socket.on('send-others-a-message', (msg) => {
    console.log('others - message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  })

  socket.on('send-to-last-socket', (msg) => {
    if(lastSocketId !== ''){
      console.log('last socket - message: ' + msg);
      io.to(lastSocketId).emit('chat message', msg);
    }
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('patate', () => {
    console.log('others - message: ');
    socket.broadcast.emit('chouchou');
  })

  socket.on('bim', () => {
    console.log('every body message: ');
    io.emit('boom');
  });

});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});