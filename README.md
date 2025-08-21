# Newman GitHub Action 🚀

This repository automates **API testing** using [Postman](https://www.postman.com/) collections and [Newman](https://github.com/postmanlabs/newman) inside **GitHub Actions**.  
Every change to the Postman collection will automatically trigger a workflow that runs the tests and generates an HTML report.

---

## 🔥 Features
- Sync Postman collection (`Booker_collection.json`) with GitHub.
- Run automated API tests using Newman.
- Generate a beautiful HTML report with `newman-reporter-htmlextra`.
- Upload the report as an artifact for easy download.

---

##✅ Benefits
- No manual testing – runs automatically in CI/CD.
- Instant feedback with reports.
- Keeps Postman collections and GitHub in sync.
