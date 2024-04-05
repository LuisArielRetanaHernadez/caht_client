/* eslint-disable no-undef */
import { Cloudinary } from "@cloudinary/url-gen";

// configuracion de cloudinary
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqmkovsdy',
  }
})

export default cld;
