import { connect } from "react-redux";
import { setUser } from "../../store/slices/user";
import styles from "./index.module.css";

const UserForm = ({ user, setUser, handleSubmit, children }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const user = Object.fromEntries(Array.from(new FormData(e.target)));

    setUser(user);

    handleSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          className={styles.input}
          placeholder="kullanıcı adı"
          name="name"
          type="text"
          defaultValue={user.name}
          required
        />
      </div>
      <div>
        <ul className={styles.figure}>
          {["aylak", "kılkuyruk", "patiayak", "çatalak"].map((figure, _i) => (
            <li key={`figure-input-${_i}`}>
              <input
                name="figure"
                type="radio"
                id={`figure_${_i}`}
                value={figure}
                defaultChecked={figure === user.figure}
                required
              />
              <label htmlFor={`figure_${_i}`}>{figure}</label>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </form>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
