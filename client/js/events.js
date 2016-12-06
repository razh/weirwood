const state = {
  tick: 0,
  tick_rate: 40,
  clients: {},
};

function createClient(socket) {
  socket.addEventListener('message', event => {
    console.log(event)
  });

  socket.addEventListener('close', event => {
    console.log(event);
  });
}

function connect() {
  const socket = new WebSocket(`ws://${window.location.hostname}:8080`);

  socket.addEventListener('open', () => {
    createClient(socket);
  });
}

connect();
