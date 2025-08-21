# Newman Github Action
This repository runs Postman API tests automatically using Newman inside GitHub Actions.

#How It Works
- When Booker_collection.json changes, the workflow is triggered.
- GitHub Actions runs the Postman collection with Newman.
- An HTML report is generated and available in the workflow artifacts.
