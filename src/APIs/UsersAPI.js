import Axios from 'axios';

const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

/*
export const getUserData = () => {
    Axios.get(`https://healthyceylon.000webhostapp.com/admin_user_retrieve.php?APIkey=${APIkey}`);
}
*/

export const getUserData = Axios.create({
    baseUrl: `https://healthyceylon.000webhostapp.com/admin_user_retrieve.php?APIkey=${APIkey}`
  });