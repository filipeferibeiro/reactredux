import { connect } from "react-redux";

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <br /> <br />
      <span>Aula {activeLesson.title}</span>
      <br /> <br />
    </div>
  );
}

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
