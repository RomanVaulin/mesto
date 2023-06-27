export default class UserInfo {
    constructor(info) {
        this._profileName = document.querySelector(info.nameProfileSelector);
        this._profileJob = document.querySelector(info.jobProfileSelector);
    }
    getUserInfo() {
        return {
            username: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo(userData) {
        this._profileName.textContent = userData.username;
        this._profileJob.textContent = userData.job;
    }
}