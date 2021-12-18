import { connect } from "react-redux";
import Layout from "./components/Layout";
import Scene from "./scenes";

const App = ({ scene }) => (
  <Layout>
    <Scene currentScene={scene} />
  </Layout>
);

const mapStateToProps = ({ scene }) => ({ scene });

export default connect(mapStateToProps)(App);
