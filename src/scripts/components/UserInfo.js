export default class UserInfo {
    constructor({ nameSelector, infoSelector, imageSelector }) {
        this.profileNameElement = document.querySelector(nameSelector);
        this.profileInfoElement = document.querySelector(infoSelector);
        this.profileImageElement = document.querySelector(imageSelector);
    }
    
    getUserInfo() {
        const UserInfo = {};
        UserInfo.name = this.profileNameElement.textContent;
        UserInfo.about = this.profileInfoElement.textContent;
        return UserInfo;
    }

    setUserInfo(item) {
        this.profileNameElement.textContent = item.name;
        this.profileInfoElement.textContent = item.about;
        this.profileImageElement.setAttribute('src', item.avatar);
    }
}