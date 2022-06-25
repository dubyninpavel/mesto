export default class Api {
    constructor(url) {
        this.url = url;
    }

    getCards() {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject('Возникла ошибка');
            })
    }

    getDataUser() {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    setDataUser(data) {
        return fetch(this.url, {
            method: "PATCH",
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
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
        return fetch(this.url, {
            method: 'POST',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
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
        return fetch(`${this.url}/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    setLikeCard(cardId) {
        return fetch(`${this.url}/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    deleteLikeCard(cardId) {
        return fetch(`${this.url}/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Возникла ошибка');
        })
    }

    updatePhotoProfile(data) {
        return fetch(this.url, {
            method: 'PATCH',
            headers: {
                authorization: '3b8f665f-518c-446a-9770-40da05a26e92',
                'Content-type': 'application/json',
            },
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