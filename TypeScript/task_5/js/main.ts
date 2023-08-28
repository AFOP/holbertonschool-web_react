interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>First Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        ${studentsList.map(student => `
          <tr>
            <td>${student.firstName}</td>
            <td>${student.location}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    document.body.appendChild(table);
  });
  