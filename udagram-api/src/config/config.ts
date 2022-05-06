import * as dotenv from "dotenv";
dotenv.config();


export const config = {
  host: process.env.RDS_HOSTNAME,
  dbPort: Number(process.env.RDS_PORT) || 5432,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  dialect: "postgres",
  aws_region: process.env.AWS_DEFAULT_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
      secret: process.env.JWT_SECRET,
  },
};
