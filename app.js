const textElement = document.querySelector('.text');

const client = new tmi.Client({
  channels: ['codingtomato'],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  console.log(tags);
  if (self || !message.startsWith('!')) return;
  if (!tags.mod && tags.username !== 'codingtomato') return;

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'working-on') {
    textElement.textContent = args.join(' ');
  }
});
