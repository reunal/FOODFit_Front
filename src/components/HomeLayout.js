import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("token");
    const isCheck = searchParams.get("additional-info");

    if (!accessToken) {
      return;
    }

    localStorage.setItem("accessToken", accessToken);

    if (isCheck && window.confirm("넘어가겠습니까?")) navigate("/signup");
  }, [navigate, setSearchParams]);

  return <div>HomeLayout</div>;
};

export default HomeLayout;
