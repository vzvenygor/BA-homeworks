import Circle from './scripts/classes1.js';
import { Marker, RefillableMarker } from './scripts/classes2.js';
import { User, Admin } from './scripts/classes3.js';

// Circle
let circle = new Circle(10);
console.log('radius', circle._radius);
circle.setDiameter();
circle.setSquare();
circle.setLength();

// Marker
const simpleMarker = new Marker('black', 50);
simpleMarker.write('Some text');

const refillableMarker = new RefillableMarker('red', 80);
refillableMarker.write('Some text');
refillableMarker.refill(); // Refill marker
refillableMarker.write('Lorem Ipsum'); // Writing text whith refillible marker

// User-Admin
const user1 = new User('Petro', 'user');
const admin1 = new Admin('AdminUser');

console.log(user1.getName());
console.log(user1.getRole());
user1.login();
user1.logout();
user1.changeName('Vasyl');
user1.changePassword('newPassword');

admin1.addUser(user1);
admin1.removeUser(user1);
admin1.changeUserRole(user1, 'admin');
admin1.getAllUsers();
admin1.removeAllUsers();
