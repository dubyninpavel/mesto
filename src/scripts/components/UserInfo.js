export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this.profileNameElement = document.querySelector(nameSelector);
        this.profileInfoElement = document.querySelector(infoSelector);
    }

    getUserInfo() {
        const obj = {};
        obj.name = this.profileNameElement.textContent;
        obj.information = this.profileInfoElement.textContent
        return obj;
    }

    setUserInfo(item) {
        this.profileNameElement.textContent = item.name;
        this.profileInfoElement.textContent = item.information;
    }
}