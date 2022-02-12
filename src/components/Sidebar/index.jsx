import { useDispatch, useSelector } from "react-redux";

import { toggleLessonAction } from '../../store/actions/course';

function Sidebar() {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();

  function toggleLesson(module, lesson) {
    dispatch(toggleLessonAction(module, lesson));
  }

  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;