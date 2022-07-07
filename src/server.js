const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA_FILE = path.join(__dirname, "data.json");

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

//Return a list of timers
app.get("/api/timers", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader("Cache-Control", "no-cache");
    res.json(JSON.parse(data));
  });
});

//Create a new timer
app.post("/api/timers", (req, res) => {
  console.log(req.body);
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    const newTimer = {
      title: req.body.title,
      project: req.body.project,
      id: req.body.id,
      elapsed: 0,
      runningSince: null,
    };

    timers.push(newTimer);
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.setHeader("Cache-Control", "no-cache");
      res.json(timers);
    });
  });

  fs.writeFile(DATA_FILE, (err, data) => {
    data.parse();
  });
});

//Set the start time of the timer
app.post("/api/timers/start", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.runningSince = req.body.start;
      }
    });

    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

//Stop and update the time
app.post("/api/timers/stop", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        const delta = req.body.stop - timer.runningSince;
        timer.elapsed += delta;
        timer.runningSince = null;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

//Update the timer
app.put("/api/timers", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.title = req.body.title;
        timer.project = req.body.project;
      }
    });

    fs.writeFile(DATA_FILE, JSON.stringify(timers, 4, null), () => {
      res.json({});
    });
  });
});

//Delete a timer
app.delete("/api/timers", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let timers = JSON.parse(data);

    timers = timers.reduce((memo, timer) => {
      if (timer.id === req.body.id) {
        return memo;
      } else {
        return memo.concat(timer);
      }
    }, []);
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

app.get("/molasses", (_, res) => {
  setTimeout(() => {
    res.end();
  }, 5000);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}`);
});
