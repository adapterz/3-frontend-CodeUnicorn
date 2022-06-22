import formidable from "formidable";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const upload = async (req, res) => {
  const fileData = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      return resolve([fields, files]);
    });
  });

  const formData = new FormData();
  const file = fileData[1].image;
  const readStream = fs.createReadStream(file.filepath);
  formData.append("nickname", fileData[0].nickname);
  formData.append("image", readStream);

  console.log(fileData[0].nickname);
  console.log(fileData[1].image);

  const response = await axios(`https://api.codeunicorn.kr/users/6/info`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data; boundary=" + formData.getBoundary(),
    },
    data: formData,
  });

  if (response.status === 200) {
    console.log(response);
    res.json({ success: true });
  } else {
    console.log(response);
    return res.status(500).json("Unknown Error");
  }
};

export default upload;
