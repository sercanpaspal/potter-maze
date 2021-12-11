import { connect } from "react-redux";
import { setUser } from "../../store/actions";

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
        <label>User Name</label>
        <input name="name" type="text" defaultValue={user.name} required />
      </div>
      <div>
        <label>Figure</label>
        {["glass", "hat", "wand", "howler"].map((figure, _i) => (
          <div key={`figure-input-${_i}`}>
            <input
              name="figure"
              type="radio"
              value={figure}
              defaultChecked={figure === user.figure}
              required
            />{" "}
            {figure}
          </div>
        ))}
      </div>
      {children}
    </form>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
