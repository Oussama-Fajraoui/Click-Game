import { useState } from "react";
import { getDatabase, ref, push, onValue, set } from "firebase/database";
import myFirebaseApp from "../firebase/database";
import { useDispatch } from "react-redux";
import { fetchStart, fetchSuccess } from "../features/userNameSlice";

const useDataCall = () => {
  const [dataList, setDataList] = useState();
  const dispatch = useDispatch();

  //! ------------------------- ADD DATA ------------

  const addData = (infoData) => {
    dispatch(fetchStart());
    const db = getDatabase(myFirebaseApp);

    const dataRef = ref(db, "points/");
    const newDataRef = push(dataRef);

    set(newDataRef, {
      userName: infoData.userName,
      userSetTime: infoData.userSetTime,
      userClickCount: infoData.userClickCount,
      userPoint: infoData.userPoint,
    });
    dispatch(fetchSuccess());
  };

  //! ------------------------- GET DATA ------------

  const fetchData = () => {
    dispatch(fetchStart());
    const db = getDatabase(myFirebaseApp);
    const dataRef = ref(db, "points/");

    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = [];

      for (let id in data) {
        dataArray.push({ id, ...data[id] });
      }
      setDataList(dataArray);
    });
  };

  dispatch(fetchSuccess());
  return { addData, fetchData, dataList };
};

export default useDataCall;