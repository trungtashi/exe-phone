function sentVinhToHung() {
    //lay du lieu tu the input
    let mess = document.getElementById("mess1").value;
    //soan tin nhan o dt cua Vinh
    dtCuaVinh.writeMessage(mess);
    //gui tin nhan cho Hung
    dtCuaVinh.sendMessage(dtCuaHung)
    //show hop thu den
    showInbox();
}
function sentHungToVing() {
    //lay du lieu tu the input
    let mess = document.getElementById("mess2").value;
    //soan tin nhan o dt cua Vinh
    dtCuaHung.writeMessage(mess);
    //gui tin nhan cho Hung
    dtCuaHung.sendMessage(dtCuaVinh)
    //show hop thu den
    showInbox();
}
function showInbox() {
    let inboxOfVinh = "";
    for (let i = 0; i < dtCuaVinh.inbox.length; i++) {
        inboxOfVinh += dtCuaVinh.inbox[i] + ",";
    }
    document.getElementById("inbox1").innerText = inboxOfVinh;

    let inboxOfHung = "";
    for (let i = 0; i < dtCuaHung.inbox.length; i++) {
        inboxOfHung += dtCuaHung.inbox[i] + ",";
    }
    document.getElementById("inbox2").innerText = inboxOfHung;
}