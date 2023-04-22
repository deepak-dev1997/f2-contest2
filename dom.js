
const employees = [
    {id:1, name:"John", age:"18", profession:"Developer"},
    {id:2, name:"Jack", age:"20", profession:"Developer"},
    {id:3, name:"Karen", age:"19", profession:"Admin"}
  ];
  

  function generateEmployeesHtml(employees) {
    return employees.map(employee => `
      <div id="data">
        <span>name: ${employee.name}</span>
        <span>profession: ${employee.profession}</span>
        <span>age: ${employee.age}</span>
      </div>
    `).join('');
  }
  
  

  function filterEmployeesByProfession(profession) {
    if (!profession) {
      alert('Please select a profession before filtering.');
      return;
    }
    const filteredEmployees = employees.filter(employee => employee.profession.toLowerCase() === profession.toLowerCase());
    const employeesHtml = generateEmployeesHtml(filteredEmployees);
    document.getElementById('array-container').innerHTML = employeesHtml;
  }
  
 
  function addNewEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    if (!name || !profession || !age) {
      alert('Please fill in all fields before adding a new employee.');
      return;
    }
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      profession: profession,
      age: age
    };
    employees.push(newEmployee);
    const employeesHtml = generateEmployeesHtml(employees);
    document.getElementById('array-container').innerHTML = employeesHtml;
  }
  
  
  document.querySelector('button').addEventListener('click', function() {
    const profession = document.getElementById('dropdown').value;
    filterEmployeesByProfession(profession);
  });
  
  
  document.querySelector('#add-user button').addEventListener('click', function() {
    addNewEmployee();
    
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
  });


  