export default class UserInfo {
    constructor(info) {
        this._profileName = document.querySelector(info.nameProfileSelector);
        this._profileJob = document.querySelector(info.jobProfileSelector);
        this._profileAvatar = document.querySelector(info.avatarProfileSelector);
    }
    getUserInfo() {
        return {
            username: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo({ username, avatar, job}) {
        this._profileAvatar.src = avatar;
        this._profileName.textContent = username;
        this._profileJob.textContent = job;
    }
}