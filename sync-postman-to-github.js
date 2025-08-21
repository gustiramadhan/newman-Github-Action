const { execSync } = require("child_process");
const fs = require("fs");
const fetch = global.fetch;


// ==== CONFIG ====
const POSTMAN_API_KEY = process.env.POSTMAN_API_KEY;
const COLLECTION_UID = process.env.COLLECTION_UID;
const FILE_NAME = "Booker_collection.json"; 
const GITHUB_REPO = "github.com/gustiramadhan/newman-Github-Action.git"; 
const BRANCH = "main";
// =================

async function downloadCollection() {
    console.log("⬇️  Downloading Postman Collection...");
    const res = await fetch(
        `https://api.getpostman.com/collections/${COLLECTION_UID}`,
    {
    headers: { "X-Api-Key": POSTMAN_API_KEY },
    }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch collection: " + res.statusText);
    }

    const data = await res.json();
    fs.writeFileSync(FILE_NAME, JSON.stringify(data, null, 2));
    console.log("✅ Collection saved to " + FILE_NAME);
}

function gitPush() {
    console.log("📤 Pushing to GitHub...");
        try {
            execSync("git add " + FILE_NAME);
            execSync('git commit -m "chore: update postman collection"');
            execSync(`git push https://${process.env.GITHUB_TOKEN}@${GITHUB_REPO} ${BRANCH}`);
                console.log("✅ Pushed to GitHub!");
        } catch (err) {
                console.error("Git push failed:", err.message);
            }
}

(async () => {
    await downloadCollection();
    gitPush();
})();
