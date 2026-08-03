const Stats = ({ tasks }) => {
  return (
    <div>
      <p>Total Tasks : {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
      <p>Pending Tasks: {tasks.filter((task) => !task.completed).length}</p>
    </div>
  );
};

export default Stats;
