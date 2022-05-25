export default async function googleOauth() {
  await gapi.signin2.render("my-signin2", {
    scope: "profile email",
    width: 230,
    height: 50,
    longtitle: true,
    theme: "dark",
  });
}
