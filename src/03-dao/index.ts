

type User = {
    id: number;
    name: string;
}

interface IUser {
    selectAll(): User[];
    selectedById(id: number): User;
    insert(user: User): void;
    update(user: User): void;
    delete(id: number): void;
}


export class UserDAO implements IUser {

    private USERS: User[] = [
        { id: 1, name: "Juan" },
        { id: 2, name: "Pedro" },
        { id: 3, name: "María" },
    ];

    selectAll(): User[] {
        return this.USERS;
    }
    selectedById(id: number): User {
        return this.USERS.find(user => user.id === id) || { id: 0, name: "Usuario no encontrado" };
    }
    insert(user: User): void {
        this.USERS.push(user);
    }
    update(user: User): void {
        const index = this.USERS.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.USERS[index] = user;
        }
    }
    delete(id: number): void {
        const index = this.USERS.findIndex(u => u.id === id);
        if (index !== -1) {
            this.USERS.splice(index, 1);
            console.log(`Usuario con id ${id} eliminado`);
        }else {
            console.log(`Usuario con id ${id} no encontrado`);
        }
    }
    
}