document.getElementById('taskForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the default form submission

  // Get values from the form
  const taskName = document.getElementById('taskName').value;
  const priority = document.getElementById('priority').value;

  // Create a new table row
  const newRow = document.createElement('tr');

  // Create three table cells (columns)
  const taskNameCell = document.createElement('td');
  taskNameCell.textContent = taskName;

  const priorityCell = document.createElement('td');
  priorityCell.textContent = priority;

  const favoriteCell = document.createElement('td');
  const favoriteButton = document.createElement('button');
  favoriteButton.textContent = 'Favourite';
  favoriteButton.classList.add('favorite-btn');
  favoriteCell.appendChild(favoriteButton);

  // Append cells to the row
  newRow.appendChild(taskNameCell);
  newRow.appendChild(priorityCell);
  newRow.appendChild(favoriteCell);

  // Add a class to the row based on priority for background color
  newRow.classList.add(priority === 'high' ? 'high-priority' : 'low-priority');

  // Append the row to the table
  document.getElementById('taskList').appendChild(newRow);

  // Clear the form fields
  document.getElementById('taskName').value = '';
  document.getElementById('priority').value = 'low';
});
