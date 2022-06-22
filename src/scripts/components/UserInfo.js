import { popupName, popupSubline, profileName, profileSubline } from "../utils/constants.js"

export default class UserInfo {
    constructor({ name, information }) {
        this.formName = name;
        this.formInfo = information;
    }

    getUserInfo() {
        popupName.value = profileName.textContent;
        popupSubline.value = profileSubline.textContent;
    }

    setUserInfo() {
        profileName.textContent = this.formName;
        profileSubline.textContent = this.formInfo;
    }
}