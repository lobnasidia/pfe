import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import passwordComplexity from "joi-password-complexity";
import TextField from "../../components/Inputs/TextField";
import Radio from "../../components/Inputs/Radio";
import Checkbox from "../../components/Inputs/Checkbox";
import Button from "../../components/Button";
import logo from "../../images/image.png";
import styles from "./styles.module.scss";
import { HeroContainer,HeroBg,HeroContent } from "../Main/HeroEle";
import c from "../../images/c.png"


const genders = ["male", "female"];

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();

  const handleInputState = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleErrorState = (name, value) => {
    value === ""
      ? delete errors[name]
      : setErrors(() => ({ ...errors, [name]: value }));
  };

  const schema = {
    email: Joi.string().email({ tlds: false }).required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        setIsFetching(true);
        const url = "http://www.localhost:8080/api/users/signup";
        await axios.post(url, data);
        setIsFetching(false);
        toast.success("Account created successfully");
        history.push("/login");
      } catch (error) {
        setIsFetching(false);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          toast.error(error.response.data);
        } else {
          console.log(error);
          toast.error("Something went wrong!");
        }
      }
    } else {
      console.log("please fill out properly");
    }
  };

  return (
    <HeroContainer>
    <HeroBg >
        <img src={c} alt ="img"/>
     </HeroBg>
     <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
     <Link to="/"> <img src={logo} alt="logo" /></Link>
     
       
     
      <h1 style={{ textAlign:"center", color: "black", width: "80rem", fontSize: "4rem" }}>Sign up for free to start listening</h1>
            <form onSubmit={handleSubmit} className={styles.form_container}>
       
          <TextField
            label="What's your email?"
            placeholder="Enter your email"
            name="email"
            handleInputState={handleInputState}
            schema={schema.email}
            handleErrorState={handleErrorState}
            value={data.email}
            error={errors.email}
            required={true}
          />
        <div className={styles.input_container}>
          <TextField
            label="Create a password"
            placeholder="Create a password"
            name="password"
            handleInputState={handleInputState}
            schema={schema.password}
            handleErrorState={handleErrorState}
            value={data.password}
            error={errors.password}
            type="password"
            required={true}
          />
        </div>
        <div className={styles.input_container}>
          <TextField
            label="What should we call you?"
            placeholder="Enter a profile name"
            name="name"
            handleInputState={handleInputState}
            schema={schema.name}
            handleErrorState={handleErrorState}
            value={data.name}
            error={errors.name}
            required={true}
          />
        </div>

        <div className={styles.input_container}>
          <Radio
            label="What's your gender?"
            name="gender"
            handleInputState={handleInputState}
            options={genders}
            required={true}
          />
        </div>
        <div style={{textAlign:"center" , width: "50rem"}}className={styles.checkbox_container}>
          <Checkbox
            required={true}
            label="Share my registration data with Samma3ni's content providers for security purposes."
          />
        </div>
        
        <div style={{alignItems:"center", display: "flex",  justifyContent: "center"}}className={styles.submit_btn_wrapper}>
          <Button label="Sign Up" type="submit" isFetching={isFetching} />
        </div>
        <p style={{textAlign:"center" }}>
          Have an account? <Link to="/login" > Log in.</Link>
        </p>
      </form>
    </HeroContent>
    </HeroContainer>
  );
};

export default SignUp;
