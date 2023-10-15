const Today = () => {
  const getDate = () => {
    let date = new Date().getDate().toString();
    let month = new Date().getMonth().toString();
    let year = new Date().getFullYear().toString();

    if (date.length < 2) {
      date = "0" + date;
    }

    if (month.length < 2) {
      month = "0" + month;
    }
    return `${date}.${month}.${year}`;
  };

  return <h3 className="today">{getDate()}</h3>;
};

export default Today;
