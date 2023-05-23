import axios from "axios";
import { BASE_URL } from "./base_url";

// get all
export const getAllRobots = async () => {
    let globalData;
    let URL;
    URL = BASE_URL + '/robots';
    await axios.get(URL).then((res) => {
        globalData = res.data;
    });
    return globalData;
};

// get by id 
export const getRobotByID = async (ID) => {
    let globalData;
    await axios.get(`${BASE_URL}/robots/${ID}`).then((res) => {
        globalData = res.data;
    });
    return globalData;
};

// delete
export const deleteRobotByID = async (ID) => {
    let deletedRobot;
    await axios.delete(`${BASE_URL}/robots/${ID}`).then((res) => {
        deletedRobot = res.globalData;
    });

    return deletedRobot;
};

// post
export const postRobot = (payload) => {
    axios.post(`${BASE_URL}/robots`, payload);
};

// put
export const editRobot = (id, payload) => {
    axios.put(`${BASE_URL}/robots/${id}`, payload);
}




