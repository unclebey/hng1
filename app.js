const express = require('express');
const app = express();
const port = 3000;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get('/api/', (req, res) => {
	const {slack_name, track} = req.query;

	if(!slack_name || !track) {
        res.json({
			"slack_name": slack_name,
			"current_day": days[new Date().getDay()],
			"utc_time": new Date().toISOString().replace(/\.\d+/, ''),
			"track": track,
			"github_file_url": "https://github.com/unclebey/hng1.git/index.js",
			"github_repo_url": "https://github.com/unclebey/hng1.git",
			"status_code": 200
        });          
}});
n
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
})
