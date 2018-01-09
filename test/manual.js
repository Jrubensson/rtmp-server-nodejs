const RtmpServer = require('./../src/server/server.js');
const server = new RtmpServer();

const PORT = 1935

server.on('error', err => {
  throw err;
});

server.on('client', client => {
  //client.on('command', command => {
  //  console.log(command.cmd, command);
  //});

  client.on('connect', () => {
     console.log('connect', client.app);
  });
  
  client.on('play', ({ streamName }) => {
    console.log('PLAY', streamName);
  });
  
  client.on('publish', ({ streamName }) => {
    console.log('PUBLISH', streamName);
  });
  
  client.on('stop', () => {
    console.log('client disconnected');
  });
});

server.listen(PORT);
console.log('running on '+ PORT)
console.log('/Applications/VLC.app/Contents/MacOS/VLC')
console.log('rtmp://localhost:'+PORT+'/live/test')