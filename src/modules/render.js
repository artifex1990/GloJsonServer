export const render = (users) => {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  
  try {
    users.forEach((user) => {
      tbody.insertAdjacentHTML('beforeend', `
        <tr data-key="${user.id}">
          <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.children ? 'Есть' : 'Нет'}</td>
            <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch"
                        id="form-children" ${user.permissions ? 'checked' : ''}>
                </div>
            </td>
            <td>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-warning btn-edit">
                        <i class="bi-pencil-square"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-remove">
                        <i class="bi-person-x"></i>
                    </button>
                </div>
            </td>
          </tr>
        `);
      });
  } catch (error) {
    const employersThead = document.getElementById('employers');

    if (typeof employersThead !== 'undefined') {
      const countTab = employersThead.querySelectorAll('th').length;
      tbody.insertAdjacentHTML(
        'beforeend',
        `<tr><td colspan="${countTab}" style="text-align: center;">Произошла ошибка, данных нет!</td></tr>`
      );
    } else {
      tbody.append('<h2>Произошла ошибка, данных нет!</h2>');
    }
  }
}