import react, { useState } from "react";
import { Redirect } from "react-router";
import "../Forms/forms.css";
import config from "../config";
import Food from "./AddFood";

function LogNewEntry(props) {
  const food = props.location.state
  console.log(food)
  const [inputs, setInputs] = useState({
    medicine: "",
    hours_slept: "0",
    sugar_intake: "0",
    rate_focus: "3",
    rate_happiness: "3",
    rate_energy: "3",
  });

  const {
    medicine,
    hours_slept,
    sugar_intake,
    rate_focus,
    rate_happiness,
    rate_energy,
  } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      medicine,
      hours_slept,
      sugar_intake,
      rate_focus,
      rate_happiness,
      rate_energy,
    };
    if (medicine === "" || hours_slept === "0") {
      return alert("Please fill out all fields");
    }
    const token = localStorage.getItem("token");
    const response = await fetch(`${config.API_ENDPOINT}/api/activity`, {
      method: "POST",
      headers: { "content-type": "application/json", token: `${token}` },
      body: JSON.stringify(body),
    });
    const parseRes = await response.json();
    if (parseRes.error) {
      alert(parseRes.error);
      console.error(parseRes.error);
    } else {
      alert("Success! Your Entry Has Been Posted!");
      props.history.push("/AllEntryView");
      
    }
  };

  return (
    <div>
      <section>
        <h3 style={{textAlign:'center'}}>What Did You Do Today? </h3>
      </section>
      <form className="log">
        <label>
          <span>How Many Hours Did You Sleep Last Night?</span>
        </label>
        <input
          type="number"
          name="hours_slept"
          onChange={(e) => onChange(e)}
          value={hours_slept}
        />
        <label>
          <span>What Medicine(s) Did You Take Today?</span>
        </label>
        <input
          type="text"
          name="medicine"
          onChange={(e) => onChange(e)}
          value={medicine}
          required
        />
        <label>
          <span>How Many Servings of Sugar Did You Eat Today?</span>
          <span>(From 0-5)</span>
        </label>
        <input
          type="range"
          name="sugar_intake"
          min="0"
          max="5"
          onChange={(e) => onChange(e)}
          value={sugar_intake}
        />
        <p className="valueDis">({sugar_intake} servings)</p>
          </form>
          
          <h3 style={{textAlign:'center'}}>What Did You Eat Today? </h3>
          <section className='card'>
          <Food food={food}/>
          </section>
          <h3 style={{textAlign:'center'}}>How Did You Feel Today? </h3>
          <form className ='log'>
          <label>
          <span>Rate Your Focus</span>
        </label>
        <input
          type="range"
          name="rate_focus"
          min="0"
          max="5"
          onChange={(e) => onChange(e)}
          value={rate_focus}
        />
        <p className="valueDis">{rate_focus}</p>
        <label>
          <span>Rate Your Happiness</span>
        </label>
        <input
          type="range"
          name="rate_happiness"
          min="0"
          max="5"
          onChange={(e) => onChange(e)}
          value={rate_happiness}
        />
        <p className="valueDis">{rate_happiness}</p>
        <label>
          <span>Rate Your Energy Level</span>
        </label>
        <input
          type="range"
          name="rate_energy"
          min="0"
          max="5"
          onChange={(e) => onChange(e)}
          value={rate_energy}
        />
        <p className="valueDis">{rate_energy}</p>
        <p>
          <button style={{float:'right', margin:'10px'}} onClick={onSubmit}> Submit</button>{" "}
         
        </p>
      </form>
    </div>
  );
}

export default LogNewEntry;
