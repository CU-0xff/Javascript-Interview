
 
   var TIMEOUT        = 5*60*1000,
      WAIT_TIMEOUT   = 250,
      express        = require("express"),
      crypto         = require("crypto"),
      app            = express.createServer(),
      io             = require("socket.io"),
      urlData        = {},
      connections    = 0,
      clear          = false;

 
 /** Send an open request, url is provided via query parameter url. */
      app.get("/open/*", function(request, response) {
        var url     = request.query.url,
            timeout = parseInt(request.query.timeout, 10) || TIMEOUT,
            id, entry, waitCallback;

        if (url) {
          if ( !connections) {
            console.log("   error -".red, "No browsers connected to open".yellow, url);
            return response.json({ success: false, error: "No browsers connected to open " + url });
          }

          // broadcast clear request for the first time
          if ( !clear && !Object.keys(urlData).length) {
            io.sockets.emit("clear");
            clear = true;
          }

          id    = crypto.createHash("md5").update(url).digest("hex");
          entry = { type: "open", success: true, id: id, url: url, timeout: timeout };
          io.sockets.emit("open", entry);
          urlData[id]  = { id: id, timeout: timeout, url: url, counter: connections };

          setTimeout(waitForLoaded(id, url, entry, response), WAIT_TIMEOUT);
          console.log("   info  -".cyan, "open".yellow, JSON.stringify(entry));
        } else {
          response.json({ success: false, error: "Invalid url" });
        }
      });