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

  // TODO name, image 중 데이터가 하나만 들어갔을 때 실패하는 이슈
  const formData = new FormData();
  const file = fileData[1].image;
  const readStream = fs.createReadStream(file.filepath);
  formData.append("nickname", fileData[0].nickname);
  formData.append("image", readStream);

  const response = await axios.post(
    `https://api.codeunicorn.kr/users/$6/info`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=" + formData.getBoundary(),
      },
    },
  );

  if (response.status === 200) {
    return res.send(response.data);
  } else {
    return res.send({
      status: "500",
      message: "error",
    });
  }
};

export default upload;
