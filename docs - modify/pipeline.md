## Udagram Pipeline

![Pipeline](Archs%20using%20lucid/Pipeline%20Arch.jpeg)

### Continuous Integration
#### GitHub
The developers push and commit their code to a GitHub repository linked to the CircleCI platform.
When code is pushed to GitHub, the CircleCI platform is triggered.

#### CircleCI
CircleCI reads the `.circleci/config.yml` file which tells the service what has to be done. In the case of Udagram,
CircleCI is responsible for two jobs (frontend and server).
- **Frontend**: Runs the `build` script given in the `package.json` file. Then uses AWS CLI to upload assets to S3.
- **Server**: Runs the `build` script, then exports all CircleCI configuration environment variables to a '.env' file before running the 'archive' script. The archive is then uploaded to S3 using the AWS CLI.
