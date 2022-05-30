import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice/apiCalls";
import Joi from "joi";
import TextField from "../../components/Inputs/TextField";
import Checkbox from "../../components/Inputs/Checkbox";
import Button from "../../components/Button";
import logo from "../../images/image.png";
import styles from "./styles.module.scss";
import { HeroBg,HeroContainer, HeroContent } from "../Main/HeroEle";
import c from "../../images/c.png"


const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { isFetching } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputState = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleErrorState = (name, value) => {
    value === ""
      ? delete errors[name]
      : setErrors({ ...errors, [name]: value });
  };

  const schema = {
    email: Joi.string().email({ tlds: false }).required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      login(data, dispatch);
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
     <Link to="/">
        <img src={logo} alt ="img"/></Link>
    
     
        <h1 style={{ textAlign:"center", color: "black", width: "70rem", fontSize: "4rem" }}>To continue, log in to Samma3ni.</h1>
       
        <form onSubmit={handleSubmit} className={styles.form_container}  style={{ maxWidth: "500px" }}>
          <div className={styles.input_container} style={{alignItems:"center", width:"40rem"}}>
            <TextField
              label="Enter your email"
              placeholder="Enter your email"
              name="email"
              handleInputState={handleInputState}
              schema={schema.email}
              handleErrorState={handleErrorState}
              value={data.email}
              error={errors.email}
              required={true}
            />
          </div>
          <div className={styles.input_container}>
            <TextField
              label="Password"
              placeholder="Password"
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
          <p style={{textAlign:"center" }}>Forgot your password?</p>
          <div style={{textAlign:"center"}} className={styles.form_bottom}>
            <Checkbox   label="Remember me" />< br/>< br/>
            <Button
              type="submit"
              label="LOG IN"
              isFetching={isFetching}
              style={{ color: "white", background: "purple", width: "20rem" }}/>
          </div>
        </form>
        <h1 style={{ textAlign:"center", color: "black", width: "59rem", fontSize: "4rem" }}>Don't have an account?<Link to="/login"  > Sign Up.</Link></h1>
       
      </HeroContent>
    </HeroContainer>
  );
};

export default Login;
