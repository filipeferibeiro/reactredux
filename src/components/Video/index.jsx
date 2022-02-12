import { useSelector } from "react-redux";

function Video() {
  const activeLesson = useSelector(state => state.course.activeLesson);
  const activeModule = useSelector(state => state.course.activeModule);

  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <br /> <br />
      <span>Aula {activeLesson.title}</span>
      <br /> <br />
    </div>
  );
}

export default Video;