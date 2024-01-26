import { addUsers } from './modules/addUsers';
import { changePermissions } from './modules/changePermissions';
import { editUsers } from './modules/editUsers';
import { removeUsers } from './modules/removeUsers';
import { render } from './modules/render';
import { UserService } from './modules/userService';

window.userService = new UserService;
userService.getUsers().then(data => render(data));
addUsers();
removeUsers();
changePermissions();
editUsers();
