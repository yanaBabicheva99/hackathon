module.exports = class UserDto {
  role;
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
}