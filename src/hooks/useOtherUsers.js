
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getOtherUsers } from "../redux/userSlice";
import { getOtherUsers } from "../redux/userSlice"; // ✅ now it works
const useOtherUsers = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
                    withCredentials: true
                });
                console.log(res);
                dispatch(getOtherUsers(res.data.otherUsers));
            } catch (error) {
                console.log(error);
            }
        };
        fetchOtherUsers();
    }, [dispatch, id]);
};

export default useOtherUsers;