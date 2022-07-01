const { Server } = require("socket.io");
const io = new Server(5000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // At FE, we have an uuid id created
  const id = socket.handshake.query.id;

  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients;
      !newRecipients.includes(id) && newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
