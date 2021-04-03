let data = {
  name: "Leonardo",
  avatar: "https://github.com/leokattah.png",
  "monthly-budget": 10000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75,
};

module.exports = {
    get(){
        return data;
    },
    update(newData){
      data = newData;
    }
}
