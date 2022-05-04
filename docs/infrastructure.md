## Udagram Infrastructure

![Architecture](Archs%20using%20lucid/System%20Arch.jpeg)

### AWS
#### RDS Postgres
The application server uses AWS RDS Postgres as database for storing and retrieving information.

Database URI: `postgres://postgres:postgres@mydb123.cifllxhq1jqk.us-east-1.rds.amazonaws.com:5432/postgres`

#### Elastic Beanstalk
AWS Elastic Beanstalk was used to host the application server. The app is created, archived, and uploaded to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

EB URL: `http://udagram-dev.eba-fb2hpe6m.us-east-1.elasticbeanstalk.com/`

#### S3 Bucket
The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that bucket is made publicly readable.

Bucket URL: `https://mostafa-bucket-123.s3.us-east-1.amazonaws.com`


