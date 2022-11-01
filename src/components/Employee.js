

function Employee(props) {
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role || 'No role'}</p>
    </>
  );
}

export default Employee;
