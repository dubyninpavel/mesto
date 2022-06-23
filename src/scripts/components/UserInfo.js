export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this.profileNameElement = document.querySelector(nameSelector);
        this.profileInfoElement = document.querySelector(infoSelector);
    }

    getUserInfo(item) {
        item.popupNameElement.value = this.profileNameElement.textContent;
        item.popupSublineElement.value = this.profileInfoElement.textContent;
    }

    setUserInfo(item) {
        this.profileNameElement.textContent = item.name;
        this.profileInfoElement.textContent = item.information;
    }
}