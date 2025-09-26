import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddMovieMutation } from "../../services/movieApi";

function AddMovie() {
  var defaultMovie = {
    title: "thammudu",
    description: "skjdh",
    duration: "180",
    language: ["Telugu", "English"],
    genre: ["Action", "Comedy"],
    releaseDate: "2025-10-10",
    rating: 0,
    reviews: "",
    cast: ["nitin", "laya", "varsha"],
    crew: ["evado", "dsp"],
    censorCertificate: "U/A",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4NGMzMmMtMGVlNy00YTU5LTg1NWMtYmZmNGU3NjYwYzUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  };
  var user = useSelector((state) => state.usrR.userDetails);
  var [castActors, setCastActors] = useState([]);
  var [newActor, setNewActor] = useState("");
  var [crewPeople, setCrewPeople] = useState([]);
  var [newCrewPerson, setNewCrewPerson] = useState("");
  var [addMovieFn] = useAddMovieMutation();
  var navigate = useNavigate();
  function addActor() {
    setCastActors([...castActors, newActor]);
  }
  function addCrew() {
    setCrewPeople([...crewPeople, newCrewPerson]);
  }
  useEffect(() => {
    addmovieForm.setFieldValue("cast", [...castActors]);
  }, [castActors.length]);
  useEffect(() => {
    addmovieForm.setFieldValue("crew", [...crewPeople]);
  }, [crewPeople.length]);
  var addmovieForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      duration: 0,
      language: [],
      genre: [],
      releaseDate: "",
      rating: 0,
      reviews: "",
      cast: [],
      crew: [],
      censorCertificate: "",
      posterUrl: "",
    },
    onSubmit: (values) => {
      addMovieFn({ movie: values, user }).then((res) => console.log(res));
    },
  });
  useEffect(() => {
    if (user.role !== "movie owner") {
      navigate("/");
    } else {
      addmovieForm.setValues({ ...defaultMovie });
      setCastActors([...defaultMovie.cast]);
      setCrewPeople([...defaultMovie.crew]);
    }
  }, []);
  return (
    <div>
      <h1>AddMovie</h1>
      <form onSubmit={addmovieForm.handleSubmit}>
        <input
          type="text"
          {...addmovieForm.getFieldProps("title")}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          {...addmovieForm.getFieldProps("description")}
          placeholder="description"
        />
        <br />
        <input
          type="text"
          {...addmovieForm.getFieldProps("duration")}
          placeholder="title"
        />
        <br />
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("language")}
          value="Telugu"
        />
        :Telugu
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("language")}
          value="Hindi"
        />
        :Hindi
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("language")}
          value="English"
        />
        :English
        <br />
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("genre")}
          value="Action"
        />
        :Action
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("genre")}
          value="Comedy"
        />
        :Comedy
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("genre")}
          value="Horror"
        />
        :Horror
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("genre")}
          value="Adventure"
        />
        :Adventure
        <input
          type="checkbox"
          {...addmovieForm.getFieldProps("genre")}
          value="Sci-Fi"
        />
        :Sci-Fi
        <br />
        Date of Release:
        <input type="date" {...addmovieForm.getFieldProps("releaseDate")} />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewActor(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            addActor();
          }}
        >
          Add Actor
        </button>
        <ul>
          {castActors.map((actor) => {
            return <li>{actor}</li>;
          })}
        </ul>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewCrewPerson(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addCrew();
          }}
          type="button"
        >
          Add Crew Person
        </button>
        <ul>
          {crewPeople.map((p) => {
            return <li>{p}</li>;
          })}
        </ul>
        <input
          type="text"
          {...addmovieForm.getFieldProps("censorCertificate")}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          {...addmovieForm.getFieldProps("posterUrl")}
          placeholder="title"
        />
        <br />
        <button type="submit">Submit Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
