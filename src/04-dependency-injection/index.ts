import { UserDAO } from "../03-dao/index.js";


class UserRepositoy extends UserDAO {

}

export class UserService {
    constructor(private userRepository: UserRepositoy) {}

    getUserById(id: number) {
        return this.userRepository.selectedById(id)
    }

    getAllUsers() {
        return this.userRepository.selectAll()
    }

    updateUser(user: { id: number; name: string }) {
        this.userRepository.update(user)
    }

    deleteUser(id: number) {
        this.userRepository.delete(id)
    }
}