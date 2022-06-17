import axios from "axios";

export default async function comonApi(
  methods: string,
  url: string,
  headers?: object,
) {
  switch (methods) {
    case "GET":
      return await axios.get(url);
    case "POST":
      return await axios.post(url, headers);
    case "PUT":
      return await axios.put(url);
    case "PATCH":
      return await axios.patch(url);
    case "DELETE":
      return await axios.delete(url);
    default:
      throw new Error("존재하지 않는 HTTP 메소드");
  }
}
