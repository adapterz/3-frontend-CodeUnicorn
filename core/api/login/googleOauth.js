export default function googleOauth() {
  gapi.signin2.render("googleLogin", {
    scope: "profile email",
    width: 230,
    height: 50,
    longtitle: true,
    theme: "dark",
  });
}
