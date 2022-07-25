
// khai báo lớp
class Mobile {
// - battery: int
// - draft: String
// - inbox: []
// - sent: []
    battery;
    draft;
    inbox;
    sent;

    constructor() {
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
    }
    checkOnOff(){
        return this.battery>0;
    }
    charge(){
        this.battery = 100;
    }
    writeMessage(newMessage){
        this.draft = newMessage;
    }
    sendMessage(newPhone){
        let mess = this.draft;
        //chuyển thư nháp của đt hiện tại sang hộp thư đến của đt nhận
        newPhone.inbox.push(mess);
        //chuyển thư nháp của đt hiện tại sang hộp thư đã gửi của đt hiện tại
        this.sent.push(mess);
        //xoá thư nháp
        this.draft = "";
        this.battery--;
    }
}

// khởi tạo đối tượng
let dtCuaVinh = new Mobile();
let dtCuaHung = new Mobile();
