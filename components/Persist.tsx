import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IAuth, loginUser } from "slices/auth";

function Persist() {
  const {
    auth: { userId },
  } = useSelector<AuthReducerType, IAuth>((state) => state);
  const dispatch = useDispatch();

  console.log(userId);

  console.log(userId);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (!userInfo) return;

    dispatch(
      loginUser({
        isLogined: true,
        userId: userInfo.id,
        userName: userInfo.nickname,
        image: userInfo.profilePath,
      } as IAuth),
    );
  }, []);

  return <></>;
}

export default Persist;
