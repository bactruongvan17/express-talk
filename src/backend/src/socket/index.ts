import { Server } from "socket.io";
import { createServer } from "http";
import { Express } from "express";

export const openSocket = (expressApp: Express): Server => {
    const port = 3001;
    const httpServer = createServer(expressApp);
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000"
        }
    });

    httpServer.listen(port);

    return io;
}
