import { Itask } from "types/task.model";

/**
 * @description taskList custom hook
 * @author Leandro Aranguez
 */
const useTask = (task: Itask) => {
  /**
   * @description edit task
   * @param id: string
   * @author Leandro Aranguez
   */
  const editTask = () => task.id;

  /**
   * @description delete task
   * @param id: string
   * @author Leandro Aranguez
   */
  const deleteTask = () => task.id;

  const duplicateTask = () => task.id;

  return {
    editTask,
    deleteTask,
    duplicateTask,
  };
};

export default useTask;
