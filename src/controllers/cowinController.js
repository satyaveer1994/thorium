let axios = require("axios");
const { get } = require("express/lib/response");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let disAndDate = async function (req, res) {
  try {
    let { district, date } = req.body;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district}&date=${date}`,
    };
    let result = await axios(options);
    res.send({ data: result.data });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

let getWeather = async function (req, res) {
  let { city, api_key } = req.body;
  try {
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
    };
    let result = await axios(options);
    let temp = result.data.main.temp;
    //console.log(result);

    res.status(200).send({ data: temp });
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let allCity = [
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Chennai",
  "London",
  "Moscow",
];

let sortCityByTemp = async function (req, res) {
  let { api_key } = req.body;
  let tempArr = [];
  //for ( let city=0;city<Array.length;city++){

  for (let city of allCity) {
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
    };
    let result = await axios(options);
    let temp = result.data.main.temp;
    tempArr.push(temp);
  }
  let a = tempArr.map((num, i) => {
    return { city: allCity[i], temp: num };
  });
  let sort = a.sort((i, j) => i.temp - j.temp);
  res.status(200).send({ data: sort });
};

let getAllMemes = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://api.imgflip.com/get_memes",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getMemeById = async function (req, res) {
  let Id = req.body.memeId;
  try {
    let options = {
      method: "post",
      url: `https://api.imgflip.com/get_memes/${Id}`,
    };
    let result = await axios(options); //console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let creatMemes = async function (req, res) {
  // let Id = req.query.params;
  // let text0 = req.query.params;
  // let text1 = req.query.params;
  // let username = req.query.params;
  // let password = req.query.params;

  let id = 8279814;
  let text0 = "Hi FunctionUp";
  let text1 = "This is My Frist Memes";
  let username = "chewie12345";
  let password = "meme@123";
  try {
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };
    let result = await axios(options);
    //let data = result.data;
    res.status(200).send({ data: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getAllMemes = getAllMemes;
module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.disAndDate = disAndDate;
module.exports.getWeather = getWeather;
module.exports.sortCityByTemp = sortCityByTemp;
module.exports.creatMemes = creatMemes;
module.exports.getMemeById = getMemeById;
