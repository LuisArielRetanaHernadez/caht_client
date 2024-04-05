/* eslint-disable no-undef */
import { Cloudinary } from "@cloudinary/url-gen";

// configuracion de cloudinary
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUD_NAME
  }
})

export default cld;
