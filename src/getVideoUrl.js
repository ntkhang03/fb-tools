const got = require("got");
const FormData = require('form-data');
const form = new FormData();
const cheerio = require("cheerio");

/**
 * Get raw video URL from a post
 * @param {string} url - URL of the video
 * @returns {string} raw video url
 */
 
 // Change request-promise -> got + form-data
 
async function getVideoUrl(url) {
	if (typeof url !== "string") throw new Error("URL must be string");

	url = new URL(url);

	let next = false;

	// Validation URL
	switch (url.hostname) {
	case "www.facebook.com":
	case "facebook.com":
	case "m.facebook.com":
	case "mbasic.facebook.com":
	case "fb.watch":
	case "fb.com":
		next = true;
		break;
	default:
		next = false;
		break;
	}

	if (!next) throw new Error("Invalid URL!");
	if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Invalid protocol");
	if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("Invalid protocol");
	
	form.append('URLz', url.toString());
	
	let response;

	try {
		response = (await got.post("https://fdown.net/download.php", {
		  body: form
		})).body;
	} catch (e) {
	  console.log(e);
		//throw new Error("ERR: Error when trying to request or maybe link is invalid");
	}
	
	let $;

	try {
		$ = cheerio.load(response);
	} catch (e) {
	  console.log(e);
		//throw new Error("ERR: Error when trying to load response");
	}
    
	let obj = {
		sd: $("#sdlink").attr("href"),
		hd: $("#hdlink").attr("href")
	};

	return obj;
}

module.exports = getVideoUrl;
