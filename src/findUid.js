const request = require("request-promise");
const cheerio = require("cheerio");

// Find UID by Facebook profile URL

async function findUid (url) {
	if (typeof url !== "string") throw new Error("URL must be string");

	url = new URL(url);
	let next = false;

	// Validation URL
	switch (url.hostname) {
	case "www.facebook.com":
	case "facebook.com":
	case "m.facebook.com":
	case "mbasic.facebook.com":
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
	
	let response;
	
	try {
	  response = await request.post("https://id.atpsoftware.vn", {
		  formData: {
		    linkCheckUid: url.toString()
		  }
		});
	} catch (e) {
	  throw new Error("ERR: Error when trying to get response");
	}
	
	let $;
	
	try {
	  $ = cheerio.load(response.toString());
	} catch (e) {
	  throw new Error("ERR: Error when loading data");
	}

	return $("#menu1 > textarea.mt-4.w-75").text();
}

module.exports = findUid;