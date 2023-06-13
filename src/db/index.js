import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("address.db")

export const init = () => { // CREANDO LA TABLA
    const promise = new Promise((resolve, reject) => { 

        db.transaction(tx => {
            tx.executeSql("create table if not exists address (id integer primary key not null, image text not null, address text not null, lat text not null, lng text not null);",
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

export const insertAddress = (title, image, address, lat, lng) => { // INSERTANDO INFO A LA TABLA
    const promise = new Promise((resolve, rejet) => {
        db.transaction(tx => {
            tx.executeSql("insert into address (title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
            [title, image, address, lat, lng],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        })
    })
}

export const fetchAddress = () => { // CONSULTANDO LOS DATOS DE LA TABLA
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("SELECT * FROM address",
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
}