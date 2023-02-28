export const GET_USERS = "GET_USERS";
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXP = "GET_EXP";
export const POST_EXP = "POST_EXP"


const baseline = "https://striveschool-api.herokuapp.com/api/profile/";

export const fetchProfiles = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseline + query, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: GET_USERS,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUser = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseline + query, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: GET_PROFILE,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const fetchExp = (exp) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseline + "63fc702df193e60013807f5a/" + exp, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: GET_EXP,
          payload: dataUsers,
        });

      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const PostExp = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseline + "63fc702df193e60013807f5a/" + query, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: POST_EXP,
          payload: dataUsers,
        });

      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};