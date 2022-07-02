import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth, loginUser } from "slices/auth";

function Persist() {
  const { userId } = useSelector<AuthReducerType, IAuth>((state) => state);
  const dispatch = useDispatch();
  const cookie = new Cookies();

  useEffect(() => {
    if (cookie.get("SESSION") === true && userId === 0) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      dispatch(
        loginUser({
          isLogined: true,
          userId: userInfo.id,
          userName: userInfo.nickname,
          image: userInfo.profilePath,
        } as IAuth),
      );
    }
  }, [userId]);

  return <></>;
}

export default Persist;
