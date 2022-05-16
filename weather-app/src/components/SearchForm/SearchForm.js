import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentWeatherData } from "../../store/weather-actions";
import { fetchHistoricalWeatherData } from "../../store/historical_weather_actions";
import Card from "../UI/Card";
import classes from "./SearchForm.module.css";

const englishVal = /^[a-zA-Z\s]*$/;

const SearchForm = () => {
  const [locationValue, setLocationValue] = useState("");
  const [errorState, setErrorState] = useState("");
  const dispatch = useDispatch();

  const onLocationInputChange = (event) => {
    if (!englishVal.test(event.target.value)) {
      setErrorState("Only English letters!");
    } else {
      setErrorState("");
    }

    setLocationValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    const trimedValue = locationValue.trim();
    event.preventDefault();
    if (trimedValue !== "") {
      trimedValue[0].toUpperCase();
      dispatch(fetchCurrentWeatherData(trimedValue));
      dispatch(fetchHistoricalWeatherData(trimedValue));
    }
  };

  const errorText = <p className={classes.errorText}>{errorState}</p>;
  const labelText = <p>Location search</p>;

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <label htmlFor="location" className={classes.locationLabel}>
          {errorState && errorText}
          {!errorState && labelText}
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={locationValue}
          onChange={onLocationInputChange}
          className={classes.locationInput}
        />
        <input
          type="submit"
          value="Search"
          className={classes.locationSubmit}
        />
      </form>
    </Card>
  );
};

export default SearchForm;
