


class EmailNotification {
    public getMessage(){
        return 'Email notification';
    }
}

class PushNotification {
 public getMessage(){
        return 'Push notification';
    }
}

class SmsNotification {
 public getMessage(){
        return 'Sms notification';
    }
}


export class NotificationFactory {
    
    public static create(type: string){
        switch(type) {
            case 'email':
                return new EmailNotification();
            case 'push':
                return new PushNotification();
            case 'sms':
                return new SmsNotification();
            default:
                throw new Error('Invalid notification type');   
        }
    }
}