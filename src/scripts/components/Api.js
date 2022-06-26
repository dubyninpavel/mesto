export default class Api {
    constructor(url) {
        this.url = url;
        this.headers = {
            authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
            'Content-type': 'application/json',
        };
    }

    _getPromiseResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('Возникла ошибка');
    }

    getAllData() {
        return Promise.all([this.getDataUser(), this.getCards()]);
    }

    getCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            //this._getPromiseResult(res);
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        });
    }

    getDataUser() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            //this._getPromiseResult(res);
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    setDataUser(data) {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    addNewCard(data) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    setLikeCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    deleteLikeCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    updatePhotoProfile(data) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }
}