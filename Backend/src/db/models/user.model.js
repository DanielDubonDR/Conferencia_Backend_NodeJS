// & Clase User
class User {
  constructor(name, email, password, gender=null, birthdate=null) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.gender = gender;
      this.birthdate = birthdate;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getGender() {
    return this.gender;
  }

  getBirthdate() {
    return this.birthdate;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setBirthdate(birthdate) {
    this.birthdate = birthdate;
  }

  toObject() {
    return {
      name: this.name,
      email: this.email,
      gender: this.gender,
      birthdate: this.birthdate
    }
  }
}

export default User;