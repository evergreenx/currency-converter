import React, { useEffect, useState } from "react";
import numberFormmater from "../helpers/numberFormmater";
import axiosConfig from "../helpers/axiosConfig";
const Currency = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [price, setPrice] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState();
  const [showResult, setShowResult] = useState(false);
  const [rate, setRate] = useState("");

  const fetchCurrencies = async () => {
    try {
      let response = await axiosConfig.get(
        "/currencies?apiKey=21c4bfc4b9a24fc9ebd7"
      );
      setCurrencyOptions(response.data.results);
      console.log(response.data.results);
    } catch (err) {
      console.log(err);
      alert(err)
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertAmount = async () => {
    try {
      let response = await axiosConfig.get(
        `convert?q=${from}_${to}&compact=ultra&apiKey=21c4bfc4b9a24fc9ebd7`
      );

      console.log(response.data);
      const result = Object.values(response.data) * price;

      setRate(result);

      setShowResult(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-around lg:flex-row flex-col items-center ">
        <input
          type="number"
          placeholder="Amount to Convert"
          className="rounded-lg focus:outline-none text-bold  text-3xl p-5"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          className="p-5 focus:outline-none text-2xl rounded-lg mb-3 mt-3"
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="" hidden="">
            Select
          </option>

          {Object.keys(currencyOptions).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>

        <select
          className="p-5 focus:outline-none text-2xl rounded-lg mb-3 mt-3 "
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="" hidden="">
            Select
          </option>

          {Object.keys(currencyOptions).map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>

        <button
          onClick={convertAmount}
          className="bg-red-500 rounded-lg text-white font-bold p-5 tet-2xl focus:outline-none hover:bg-red-400"
        >
          Convert
        </button>
      </div>

      {showResult ? (
        <h1 className="text-3xl text-red-500 text-center mt-8 tracking-tighter transition delay-1000 duration-600 ease-in-out">
          {numberFormmater(price)} {from} ={" "}
          {numberFormmater(parseFloat(rate).toFixed(2))} {to}
        </h1>
      ) : (
        <h1 className="text-3xl text-red-500 text-center mt-8 tracking-tighter">
          Try Converting a Currency
        </h1>
      )}
    </div>
  );
};

export default Currency;
