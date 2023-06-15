import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("myBookingTest.db")

export const init = () => { // CREANDO LA TABLA
    const promise = new Promise((resolve, reject) => { 

        db.transaction(tx => {
            tx.executeSql("create table if not exists book (id integer primary key not null,title text not null, image text not null, lat text not null, lng text not null);",
            [],
            () => {
                resolve()
            },
            (_,err) => {
                reject(err)
            }
            )
        })

    })
    return promise
}

export const insertAddress = (title, image, lat, lng) => { // INSERTANDO INFO A LA TABLA
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("insert into book (title, image, lat, lng) VALUES (?, ?, ?, ?);",
            [title, image, lat, lng],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        })
    })
}

export const fetchAddress = () => { // CONSULTANDO LOS DATOS DE LA TABLA
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("SELECT * FROM book",
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
    return promise
}