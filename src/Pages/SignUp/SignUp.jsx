import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

const {createUser} = useContext(AuthContext)

const handleLSignUp = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)

    createUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(error =>{
        console.error(error)
    })
}


    return (
        <div>
        <div className="hero min-h-screen">
          <div className="hero-content lg:flex-row flex-col">
            <div className="mr-12 w-1/2">
              <img src={img} alt="" />
            </div>
  
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div>
                <h1 className="text-3xl text-center pt-4 font-bold">Sign up Now</h1>
              </div>
  
              <form className="card-body" onSubmit={handleLSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                  
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    {/* <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a> */}
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>
              <div className="py-4">
                <p className="text-center">
                  Already have an account ? Please{" "}
                  <Link className="text-blue-700 font-bold" to={`/login`}>
                  Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;