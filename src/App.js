import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [surname, setSurName] = useState("")
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState("")
  const [activities, setActivites] = useState("")
  const [adult, setAdult] = useState(false);
  const [formData, setFormData] = useState({
    _name:"",
    _surname:"",
    _gender:"",
    _age:"",
    _activities:""
  })

  function handleSubmit(e){

    e.preventDefault()

    setFormData({
      ...formData,
      _name: name,
      _surname: surname,
      _gender: gender,
      _age: age,
      _activities: activities
    })

    console.log(name, surname, gender, age, activities)

    setAdult((age>18))

  }

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <span>Name: </span>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            <span>Surname: </span>
            <input type="text" value={surname} onChange={e=> setSurName(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            <span>Gender: </span>
            <input type="radio" 
              value="male" 
              checked={gender === "male"} 
              onChange={e=> setGender(e.target.value)} /> Male
            <input type="radio" 
              value="female" 
              checked={gender === "female"} 
              onChange={e=> setGender(e.target.value)} /> Female
          </label>
        </p>
        <select value={activities} onChange={e=>setActivites(e.target.value)}>
          <option value="">Select activities</option>
          {
            (gender==="male")? (
              <>
                <option value="swimming">Swimming</option>
                <option value="cycling">Cycling</option>
              </>
            ): (
              <>
                 <option value="swimming">Swimming</option>
                 <option value="dancing">Dancing</option>
              </>
            )
          }
          
        </select>
        <p>
          <label>
            <span>Age: </span>
            <input type="text" value={age} onChange={e=> setAge(e.target.value)} />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
      {
        (adult && 
          <p>
            Beer, Vodka, Gin
        </p>
        )
      }
    </div>
  );
}

export default App;

// A registration form that has name, surname, gender, age. The gender would be a radiobox.
// There will be a 
// If gender is male, show the user activities dropdown that has values swimming and cycling
// If the gender is female, then show the dropdown with values dancing and swimming.
// On submit, print the information on console.
// On submission if the age is greater than 18, show them a list of alcoholic beverages (simple list with dummy items).